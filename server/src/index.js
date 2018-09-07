import express from 'express';
import config from './config';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from './config/logger';
mongoose.connect(config.db.url);
// import mongoose models here

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(config.server.port, () => logger.debug(`Listening on port ${config.server.port}`));