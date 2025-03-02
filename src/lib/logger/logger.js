import fs from 'node:fs';
import path from 'node:path';

import LogLevel from './levels.js';
import formatMessage from './formatter.js';

class Logger {

  constructor(logPath = 'var/log/app.log') {
    this.logPath = logPath
    if (!fs.existsSync(path.dirname(this.logPath))) {
      fs.mkdirSync(
        path.dirname(this.logPath),
        {
          recursive: true
        }
      )
    }
  }

  __log(level, message) {
    const formattedMessage = formatMessage(level, message);

    if(process.env.APP_ENV === 'dev'){
      console.log(formattedMessage);
    } else {
      fs.appendFile(this.logPath, `${formattedMessage} \n`, (err) => {
        if (err) {
          console.error("Error while try to put data to file", err.message)
        }
      });
    }
  }

  info(message) {
    this.__log(LogLevel.INFO, message);
  }

  warning(message) {
    this.__log(LogLevel.WARNING, message);
  }

  error(message) {
    this.__log(LogLevel.ERROR, message);
  }
}

export default Logger;

