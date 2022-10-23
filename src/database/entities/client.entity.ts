import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Event } from './event.entity';
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

  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
