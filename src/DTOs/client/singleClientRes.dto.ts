import { IDefaultResponse } from '../../interfaces';
import { Client } from '../../database/entities';

export class SingleClientResDTO implements IDefaultResponse<Client> {
  statusCode: number;
  message: string;
  response: {
    success: boolean;
    data: Client;
  };
}
