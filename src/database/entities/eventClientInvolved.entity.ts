import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ExtraClient } from './extraClient.entity';
import { Event } from './event.entity';

@Entity('events_clients_involved')
export class EventClientInvolved {
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @ManyToOne(
    () => ExtraClient,
    (extraClient) => extraClient.eventsClientsInvolved,
  )
  @JoinColumn({ name: 'extra_client_id' })
  public extraClient: ExtraClient;

  @ManyToOne(() => Event, (event) => event.eventsClientsInvolved)
  @JoinColumn({ name: 'event_id' })
  public event: Event;

  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
