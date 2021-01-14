import 'dotenv/config';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportjwt from 'passport-jwt';
import User from '../components/user/user.model';

const JWTStrategy = passportjwt.Strategy;
const ExtractJWT = passportjwt.ExtractJwt;

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (username, password, done) => {
      let user;
      try {
        user = await User.find().byEmail(username).exec();
        if (!user) {
          return done(null, false, {
            message: 'Incorrect username or password',
          });
        }
        return done(null, user, { message: 'Logged In Successfully' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SESSION_SECRET,
    },
    async (jwtPayload, done) => {
      let user;
      try {
        user = await User.findOneById(jwtPayload.id);
        if (!user) throw new Error('User not found');
      } catch (error) {
        return done(error);
      }
      return done(null, user);
    },
  ),
);
