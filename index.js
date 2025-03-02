import Logger from './src/lib/logger/logger.js';

const logger = new Logger();

logger.info('Test info message');
logger.warning('Test warning message');
logger.error('Test error message')
logger.info(new Error('Some error'));
