import {
  isNumberString,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { ErrorsMessages } from '../constants';

function cpfValid(cpf: any) {
  if (
    cpf.length != 11 ||
    cpf == '' ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    return false;
  }

  const firstVerificationNumber = Number(cpf[9]);
  const secondVerificationNumber = Number(cpf[10]);

  const firstValidationSum =
    Number(cpf[0]) * 10 +
    Number(cpf[1]) * 9 +
    Number(cpf[2]) * 8 +
    Number(cpf[3]) * 7 +
    Number(cpf[4]) * 6 +
    Number(cpf[5]) * 5 +
    Number(cpf[6]) * 4 +
    Number(cpf[7]) * 3 +
    Number(cpf[8]) * 2;

  const SecondValidationSum =
    Number(cpf[0]) * 11 +
    Number(cpf[1]) * 10 +
    Number(cpf[2]) * 9 +
    Number(cpf[3]) * 8 +
    Number(cpf[4]) * 7 +
    Number(cpf[5]) * 6 +
    Number(cpf[6]) * 5 +
    Number(cpf[7]) * 4 +
    Number(cpf[8]) * 3 +
    firstVerificationNumber * 2;

  if (
    Math.trunc((firstValidationSum * 10) % 11) % 10 ===
    Number(firstVerificationNumber)
  ) {
    if (
      Math.trunc((SecondValidationSum * 10) % 11) % 10 ===
      Number(secondVerificationNumber)
    ) {
      return true;
    }
  }

  return false;
}

export function IsValidCpf(options?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options,
      validator: {
        validate(value: any) {
          return typeof isNumberString(value) && cpfValid(value);
        },
        defaultMessage(args: ValidationArguments) {
          return ErrorsMessages.invalidParams(args.property);
        },
      },
    });
  };
}
