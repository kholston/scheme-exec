import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ['Base', 'Admin'], default: 'Base' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  { timestamps: true },
);

UserSchema.pre('save', async (next) => {
  const user = this;
  if (!user.isModified) return next();

  try {
    const salt = await bcryptjs.genSalt(SALT_WORK_FACTOR);
    const hash = await bcryptjs.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    return next(error);
  }
  return next();
});

UserSchema.methods.comparePassword = async (canidatePassword, next) => {
  let isMatch;
  try {
    isMatch = await bcryptjs.compare(canidatePassword, this.password);
  } catch (error) {
    return next(error);
  }
  return next(null, isMatch);
};

const User = mongoose.model('User', UserSchema);
export default User;
