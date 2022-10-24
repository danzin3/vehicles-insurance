import { AppDataSource } from '../configs/dataSource';
import { Client, ExtraClient } from '../database/entities';

export class ClientRepository {
  private static instance: ClientRepository;
  public clientRepository = AppDataSource.getRepository(Client);
  public extraClientRepository = AppDataSource.getRepository(ExtraClient);

  private constructor() {}

  public static getInstance(): ClientRepository {
    if (!ClientRepository.instance) {
      ClientRepository.instance = new ClientRepository();
    }
    return ClientRepository.instance;
  }

  public async createExtraClients(clients: Client[]) {
    await this.clientRepository.manager.transaction(async (transactional) => {
      await Promise.all(
        clients.map(async (client) => {
          const clientFound = await transactional.findOne(Client, {
            where: { cpf: client.cpf },
          });
          if (!clientFound) {
            const clientCreated = await transactional.save(Client, client);
            return transactional.save(ExtraClient, { client: clientCreated });
          } else {
            return transactional
              .createQueryBuilder()
              .insert()
              .into(ExtraClient)
              .values({ client: { id: clientFound.id } })
              .orIgnore()
              .execute();
          }
        }),
      );
    });
  }

  public async migrateClient(client: Client) {
    if (client.extraClient) {
      await this.extraClientRepository
        .createQueryBuilder()
        .update({ isActived: false })
        .where(client.extraClient)
        .execute();
    }
  }
}
