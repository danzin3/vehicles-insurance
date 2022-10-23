import {
  IsOptional,
  MaxLength,
  IsString,
  IsNumberString,
} from 'class-validator';
import { IsValidCpf } from '../../decorators';
import { CreateClientReqDTO } from './createClientReq.dto';
import { ClassValidatorMessages } from '../../constants';

export class UpdateClientReqDTO extends CreateClientReqDTO {
  @IsOptional()
  @IsString({ message: ClassValidatorMessages.isString('name') })
  @MaxLength(255, {
    message: ClassValidatorMessages.maxLength('name'),
  })
  public name: string;

  @IsOptional()
  @IsNumberString({ message: ClassValidatorMessages.isNumberString('cpf') })
  @IsValidCpf()
  public cpf: string;
}
