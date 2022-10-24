import { ClientRepository, EventRepository } from '../../repositories';
import { CreateEventReqDTO, SingleEventResDTO } from '../../DTOs/event';
import { HttpStatus } from '../../enums';
import { Event } from '../../database/entities';
import { plainToClass } from 'class-transformer';

const clientRepoInstance = ClientRepository.getInstance();
const eventRepoInstance = EventRepository.getInstance();

export async function createEvent(
  data: CreateEventReqDTO,
): Promise<SingleEventResDTO> {
  await clientRepoInstance.createExtraClients(data.extraClients);
  const response = await eventRepoInstance.createEvent(data);
  return {
    statusCode: HttpStatus.CREATED,
    message: 'Sucesso ào cadastrar Evento!',
    response: {
      success: true,
      data: plainToClass(Event, response),
    },
  };
}
