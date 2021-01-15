import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import projectRouter from './components/project/project.routes';
import taskRouter from './components/task/task.routes';
import teamRouter from './components/team/team.routes';
import userRouter from './components/user/user.routes';

const app = express();

// Setup Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use('/projects', projectRouter);
app.use('/tasks', taskRouter);
app.use('/teams', teamRouter);
app.use('/users', userRouter);

export default app;
