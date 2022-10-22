/**
 * By default, alls messages of decorator validade is in english.
 * Here I can choose what message I want to send to the client and
 * what language I have to do it.
 */

export function isNotEmptyMessage(attr: string): string {
  return `O atributo '${attr}' é obrigatório para essa ação`;
}

export function isString(attr: string): string {
  return `O atributo '${attr}' deve possuir um valor do tipo string`;
}

export function maxLength(attr: string): string {
  return `O atributo '${attr}' deve possuir no máximo 255 caracteres`;
}

export function isNumberString(attr: string): string {
  return `O atributo '${attr}' deve ser uma string numérica`;
}

export function isEmail(attr: string): string {
  return `O atributo '${attr}' deve ser um email real`;
}
