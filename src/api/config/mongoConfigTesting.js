import mongoose from 'mongoose';
import debug from 'debug';
import { MongoMemoryServer } from 'mongodb-memory-server';

const log = debug('schemeExec:mongodb-test');
const mongoServer = new MongoMemoryServer();

export const connectDatabase = async ()=>{
  const uri = await mongoServer.getConnectionString();
  
  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval:1000,
  };
  
  await mongoose.connect(uri,mongooseOpts);
}

export const closeDatabase = async()=>{
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
}

export const clearDatabase = async ()=>{
  const collections = mongoose.connection.collections;
  
  for(const key in collections){
    const collection = collections[key];
    await collection.deleteMany();
  };
}

