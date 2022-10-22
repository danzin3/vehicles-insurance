export interface ILogInfo {
  httpMethod: string;
  url: string;
  timing?: number;
}

export interface ILogDebug {
  httpMethod: string;
  url: string;
  layer: string;
  fileName: string;
  lineNumber: number;
  objValue: Array<any> | any;
  request?: any;
  description?: string;
}

export interface ILogWarn {
  httpMethod: string;
  url: string;
  fileName: string;
  request?: any;
  description?: string;
}

export interface ILogError {
  httpMethod: string;
  url: string;
  request?: any;
  data: any;
}
