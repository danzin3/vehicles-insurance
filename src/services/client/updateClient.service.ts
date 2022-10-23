import { Client } from '../../database/entities';
import { ClientRepository } from '../../repositories';
import { HttpStatus } from '../../enums';
import { SingleClientResDTO } from '../../DTOs/client';
import { buildNotFoundResponse } from '../errors';

const repository = ClientRepository.getInstance();

export async function updateClient(
  data: Client,
  clientId: string,
): Promise<SingleClientResDTO> {
  const clientFound = await repository.clientRepository.findOne({
    where: { publicId: clientId },
  });

  if (!clientFound) {
    throw buildNotFoundResponse('Client');
  }

  const response = await repository.clientRepository
    .createQueryBuilder()
    .update(data)
    .where({ publicId: clientId })
    .returning(['public_id', 'name', 'cpf', 'email', 'description'])
    .execute();

  return {
    statusCode: HttpStatus.OK,
    message: 'Sucesso ao Editar dados do Cliente!',
    response: {
      success: true,
      data: response.raw[0],
    },
  };
}
