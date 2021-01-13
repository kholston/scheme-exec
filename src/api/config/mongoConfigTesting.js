import mongoose from 'mongoose';
import debug from 'debug';
import { MongoMemoryServer } from 'mongodb-memory-server';

const log = debug('schemeExec:mongodb-test');
const mongoServer = new MongoMemoryServer();

export const connectDB = async () => {
  const uri = await mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, mongooseOpts);
};

export const closeDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

export const clearDB = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
