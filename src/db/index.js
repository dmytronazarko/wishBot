import mongoose from 'mongoose';

import { logger } from '../logger';

mongoose.connect(process.esv.MONGO_DB);

const db = mongoose.connection;

db.on('error', e => logger.error(e));
db.once('open', () => logger.info('Connected to the mongoDB'));
db.once('close', () => logger.info('MongoDB connection has closed'));

export { mongoose };
