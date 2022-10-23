import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { EventTypes, EventStatus } from '../../enums';
import { Vehicle } from './vehicle.entity';
import { Client } from './client.entity';
import { Exclude } from 'class-transformer';
import { EventClientInvolved } from './eventClientInvolved.entity';

@Entity('events')
export class Event {
  @Exclude()
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ name: 'public_id' })
  public publicId: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.events)
  @JoinColumn({ name: 'vehicle_id' })
  public vehicle: Vehicle;

  @ManyToOne(() => Client, (client) => client.events)
  @JoinColumn({ name: 'client_id' })
  public client: Client;

  @OneToMany(
    () => EventClientInvolved,
    (eventClientInvolved) => eventClientInvolved.event,
  )
  public eventsClientsInvolved: EventClientInvolved[];

  @Column({ type: 'enum', enum: EventTypes, name: 'event_type' })
  public eventType: EventTypes;

  @Column({ type: 'date', name: 'when_happened' })
  public whenHappened: Date;

  @Column({ type: 'numeric', name: 'loss_amount' })
  public lossAmount: number;

  @Column({ type: 'enum', enum: EventStatus })
  public status: EventStatus;

  @Column()
  public description: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
