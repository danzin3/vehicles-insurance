import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Client } from './client.entity';
import { EventClientInvolved } from './eventClientInvolved.entity';

@Entity('extra_clients')
export class ExtraClient {
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ name: 'public_id' })
  public publicId: string;

  @OneToOne(() => Client, (client) => client.extraClient)
  @JoinColumn({ name: 'client_id' })
  public client: Client;

  @OneToMany(
    () => EventClientInvolved,
    (eventClientInvolved) => eventClientInvolved.extraClient,
  )
  public eventsClientsInvolved: EventClientInvolved[];

  @Column({ type: 'boolean', name: 'is_actived' })
  public isActived: boolean;

  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
