import log4j from 'log4js';
import config from './';

const logger = log4j.getLogger();
logger.level = config.loggingLevel;

export default logger;