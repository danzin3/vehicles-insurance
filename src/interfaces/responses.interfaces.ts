/**
 * The main objective of these interfaces it is to standardize the
 * communication between the server and the client in a single responses way.
 * With this, the client always gonna have the same structure response type, and
 * that can be useful for others backend application communication as well.
 */

export interface IErrorBody {
  success: false;
  data: Array<{
    message: string;
    support?: string;
  }>;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
  response?: IErrorBody;
}

export interface ISingleObject {
  objectKeys: Array<string>;
  description: string;
}

export interface IDefaultResponse<T> {
  statusCode: number;
  message: string;
  response: {
    success: boolean;
    info?: ISingleObject;
    data: Array<T> | T;
  };
}
