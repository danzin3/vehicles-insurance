import { Client } from '../../database/entities';
import { ClientRepository } from '../../repositories';
import { HttpStatus } from '../../enums';
import { SingleClientResDTO } from '../../DTOs/client';
import { buildNotFoundResponse } from '../errors';
import { plainToClass } from 'class-transformer';

const repository = ClientRepository.getInstance();

export async function deleteClient(
  clientId: string,
): Promise<SingleClientResDTO> {
  const clientFound = await repository.clientRepository.findOne({
    where: { publicId: clientId },
  });

  if (!clientFound) {
    throw buildNotFoundResponse('Client');
  }

  await repository.clientRepository.softDelete({ publicId: clientId });

  return {
    statusCode: HttpStatus.OK,
    message: 'Sucesso ao deletar Cliente!',
    response: {
      success: true,
      data: plainToClass(Client, clientFound),
    },
  };
}
