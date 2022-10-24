import { Client } from '../../database/entities';
import { ClientRepository } from '../../repositories';
import { SingleClientResDTO } from '../../DTOs/client';
import { HttpStatus } from '../../enums';
import { plainToClass } from 'class-transformer';

const repository = ClientRepository.getInstance();

export async function createClient(data: Client): Promise<SingleClientResDTO> {
  let clientCreated: Client;
  const clientFounded = await repository.clientRepository.findOne({
    where: { cpf: data.cpf },
    relations: ['extraClient'],
  });

  if (clientFounded) {
    await repository.migrateClient(clientFounded);
    clientCreated = clientFounded;
  } else {
    clientCreated = await repository.clientRepository.save(data);
  }

  return {
    statusCode: HttpStatus.CREATED,
    message: 'Sucesso ào cadastrar cliente!',
    response: {
      success: true,
      data: plainToClass(Client, clientCreated),
    },
  };
}
