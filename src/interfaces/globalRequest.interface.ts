import { Request } from 'express';
// Importar a Entity de Client

export interface IGlobalRequest extends Request {
  client: string;
}
