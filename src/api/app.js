import 'dotenv/config';
import './config/mongoConfig';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Setup Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes

export default app;
