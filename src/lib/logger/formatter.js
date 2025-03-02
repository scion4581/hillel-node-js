import chalk from 'chalk';
import LogLevel from './levels.js';

function formatMessage(level, msg) {

  const timestamp = new Date().toISOString();

  switch(level) {
    case LogLevel.INFO:
      return chalk.blue(`[${timestamp}], INFO: ${msg}`);

    case LogLevel.WARNING:
      return chalk.yellow(`[${timestamp}], WARNING: ${msg}`);

    case LogLevel.ERROR:
      return chalk.red(`[${timestamp}], ERROR: ${msg}`);

    default:
      throw new Error("Log level must be one of: " + Object.values(LogLevel));

  }
}

export default formatMessage;


