import debug from 'debug';
import app from './server';

const port = process.env.PORT;
const log = debug('schemeExec:entryPoint');

app.listen(port, () => {
  log(`API server running on port ${port}`);
});
