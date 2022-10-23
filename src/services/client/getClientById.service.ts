import { Client } from '../../database/entities';
import { ClientRepository } from '../../repositories';
import { SingleClientResDTO } from '../../DTOs/client';
import { HttpStatus } from '../../enums';
import { buildNotFoundResponse } from '../errors';
import { plainToClass } from 'class-transformer';

const repository = ClientRepository.getInstance();

export async function getClientById(
  clientId: string,
): Promise<SingleClientResDTO> {
  const clientFound = await repository.clientRepository.findOne({
    where: { publicId: clientId },
  });

  if (!clientFound) {
    throw buildNotFoundResponse('Client');
  }

  return {
    statusCode: HttpStatus.CREATED,
    message: 'Sucesso ào obter cliente por Id!',
    response: {
      success: true,
      data: plainToClass(Client, clientFound),
    },
  };
}
