import mongoose from 'mongoose';
import debug from 'debug';

const log = debug('schemeExec:mongoDB');

const mongoURI = process.env.DB_HOST;
const mongoOpts = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoURI, mongoOpts).catch((error) => log(error));

const db = mongoose.connection;
db.on('error', () => log('Mongo connection error'));
db.once('open', () => log('Mongodb successfully connected'));
