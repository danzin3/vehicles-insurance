import { AppDataSource } from '../configs/dataSource';
import { Client } from '../database/entities';

export class ClientRepository {
  private static instance: ClientRepository;
  public clientRepository = AppDataSource.getRepository(Client);

  private constructor() {}

  public static getInstance(): ClientRepository {
    if (!ClientRepository.instance) {
      ClientRepository.instance = new ClientRepository();
    }
    return ClientRepository.instance;
  }
}
