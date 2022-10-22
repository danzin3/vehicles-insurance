import { Client } from '../../database/entities';
import { ClientRepository } from '../../repositories';
import { SingleClientResDTO } from '../../DTOs/client';
import { HttpStatus } from '../../enums';
import { v4 as uuidv4 } from 'uuid';

const repository = ClientRepository.getInstance();

export async function createClient(data: Client): Promise<SingleClientResDTO> {
  data.publicId = uuidv4();

  const clientCreated = await repository.clientRepository.save(data);

  return {
    statusCode: HttpStatus.CREATED,
    message: 'Sucesso ào cadastrar cliente!',
    response: {
      success: true,
      data: clientCreated,
    },
  };
}
