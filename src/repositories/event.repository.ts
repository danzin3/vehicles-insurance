import { AppDataSource } from '../configs/dataSource';
import {
  Event,
  Vehicle,
  EventClientInvolved,
  Client,
  ExtraClient,
} from '../database/entities';
import { CreateEventReqDTO } from '../DTOs/event';

export class EventRepository {
  private static instance: EventRepository;
  public eventRepository = AppDataSource.getRepository(Event);

  private constructor() {}

  public static getInstance(): EventRepository {
    if (!EventRepository.instance) {
      EventRepository.instance = new EventRepository();
    }
    return EventRepository.instance;
  }

  public async createEvent(data: CreateEventReqDTO) {
    let eventSaved: Event;
    await this.eventRepository.manager.transaction(async (transactional) => {
      const user = await transactional.findOne(Client, {
        where: { publicId: data.client.publicId },
      });
      const vehicleSaved = await transactional.save(Vehicle, data.vehicle);
      eventSaved = await transactional.save(Event, {
        ...data,
        client: user,
        vehicle: vehicleSaved,
      });
      await Promise.all(
        data.extraClients.map(async (client) => {
          return transactional.query(
            `
            INSERT INTO events_clients_involved (event_id, extra_client_id)
            values (
                $1,
                (select id from extra_clients where client_id = (select id from clients where cpf = $2))
            )
          `,
            [eventSaved.id, client.cpf],
          );
        }),
      );
    });
    return eventSaved;
  }
}
