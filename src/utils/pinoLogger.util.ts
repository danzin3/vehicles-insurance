import pino from 'pino';
import { ILogInfo, ILogDebug, ILogWarn, ILogError } from '../interfaces';

export class PinoLogger {
  private static instance: PinoLogger;
  private logger = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
        ignore: 'pid,hostname',
        colorize: true,
        levelFirst: true,
      },
    },
  });

  private constructor() {}

  public static getInstance(): PinoLogger {
    if (!PinoLogger.instance) {
      PinoLogger.instance = new PinoLogger();
    }
    return PinoLogger.instance;
  }

  public genericLog(msg: string) {
    this.logger.info(msg);
  }

  public genericError(param: any) {
    this.logger.error(param);
  }

  public async info(msg: ILogInfo) {
    this.logger.info(
      `${msg.httpMethod} - ${msg.url} - \x1b[33m${msg.timing}ms`,
    );
  }

  public async debug(param: ILogDebug) {
    this.logger.debug(JSON.stringify(param, null, 2));
  }

  public async warn(param: ILogWarn) {
    this.logger.warn(JSON.stringify(param, null, 2));
  }

  public async error(param: ILogError) {
    this.logger.error(JSON.stringify(param, null, 2));
  }
}
