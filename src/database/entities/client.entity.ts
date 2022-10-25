import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Event } from './event.entity';
import { ExtraClient } from './extraClient.entity';
import { Exclude } from 'class-transformer';

@Entity('clients')
export class Client {
  @Exclude()
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ name: 'public_id' })
  public publicId: string;

  @OneToMany(() => Event, (event) => event.client)
  public events: Event[];

  @OneToOne(() => ExtraClient, (extraClient) => extraClient.client)
  public extraClient: ExtraClient;

  @Column()
  public name: string;

  @Column()
  public cpf: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public description: string;

  @Exclude()
  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
