import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { VehicleTypes } from '../../enums';
import { Event } from './event.entity';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ name: 'public_id' })
  public publicId: string;

  @OneToMany(() => Event, (event) => event.vehicle)
  public events: Event[];

  @Column()
  public name: string;

  @Column()
  public code: string;

  @Column({ type: 'enum', enum: VehicleTypes, name: 'vehicle_type' })
  public vehicleType: VehicleTypes;

  @Column()
  public description: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;
}
