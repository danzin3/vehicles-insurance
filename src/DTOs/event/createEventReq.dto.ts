import {
  ArrayMaxSize,
  ArrayMinSize,
  IsAlphanumeric,
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  NotEquals,
  ValidateNested,
} from 'class-validator';
import { Client, Event, Vehicle } from '../../database/entities';
import { ClassValidatorMessages } from '../../constants';
import { EventStatus, EventTypes, VehicleTypes } from '../../enums';
import { CreateClientReqDTO } from '../client/createClientReq.dto';
import { Type } from 'class-transformer';

class EventVehicleDTO extends Vehicle {
  @IsNotEmpty({ message: ClassValidatorMessages.isNotEmptyMessage('name') })
  @IsString({ message: ClassValidatorMessages.isString('name') })
  @MaxLength(255, {
    message: ClassValidatorMessages.maxLength('name'),
  })
  public name: string;

  @IsOptional()
  @IsString()
  public code: string;

  @IsOptional()
  @IsEnum(VehicleTypes)
  public vehicleType: VehicleTypes;

  @IsOptional()
  @IsString()
  public description: string;
}

export class CreateEventReqDTO extends Event {
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateClientReqDTO)
  public client: CreateClientReqDTO;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClientReqDTO)
  public extraClients: CreateClientReqDTO[];

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => EventVehicleDTO)
  public vehicle: EventVehicleDTO;

  @IsNotEmpty({
    message: ClassValidatorMessages.isNotEmptyMessage('eventType'),
  })
  @IsEnum(EventTypes)
  public eventType: EventTypes;

  @IsNotEmpty({
    message: ClassValidatorMessages.isNotEmptyMessage('whenHappened'),
  })
  @IsDate()
  @Type(() => Date)
  public whenHappened: Date;

  @IsOptional()
  @IsNumber()
  public lossAmount: number;

  @IsOptional()
  @IsEnum(EventStatus)
  public status: EventStatus;

  @IsOptional()
  @IsString()
  public description: string;
}
