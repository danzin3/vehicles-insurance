import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Client } from '../../database/entities';
import { ClassValidatorMessages } from '../../constants';
import { IsValidCpf } from '../../decorators';

export class CreateClientReqDTO extends Client {
  @IsNotEmpty({ message: ClassValidatorMessages.isNotEmptyMessage('name') })
  @IsString({ message: ClassValidatorMessages.isString('name') })
  @MaxLength(255, {
    message: ClassValidatorMessages.maxLength('name'),
  })
  public name: string;

  @IsNotEmpty({ message: ClassValidatorMessages.isNotEmptyMessage('cpf') })
  @IsNumberString({ message: ClassValidatorMessages.isNumberString('cpf') })
  @IsValidCpf()
  public cpf: string;

  @IsOptional()
  @IsEmail({ message: ClassValidatorMessages.isEmail('cpf') })
  public email: string;

  @IsOptional()
  @IsString({ message: ClassValidatorMessages.isString('password') })
  public password: string;

  @IsOptional()
  @IsString({ message: ClassValidatorMessages.isString('description') })
  public description: string;
}
