import mongoose from 'mongoose';
import debug from 'debug';
import { MongoMemoryServer } from 'mongodb-memory-server';

const log = debug('schemeExec:mongodb-test');
const mongoServer = new MongoMemoryServer();

//mongoose.Promise = Promise;
mongoServer.getConnectionString().then((mongoURI) => {
  const mongooseOpts = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
  };

  mongoose.connect(mongoURI, mongooseOpts);
  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      log(e);
      mongoose.connect(mongoURI, mongooseOpts);
    }
    log(e);
  });
  mongoose.connection.once('open', () => {
    log(`MongoDB successfully connected to ${mongoURI}`);
  });
});
