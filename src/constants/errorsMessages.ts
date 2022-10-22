const MISSING_ENVS = 'Missing env variable';
const INTERNAL_SERVER_ERROR = 'internal server error';
const MISSING_PARAMS_REQUEST = 'Missing params in request';
const NOT_UUID_V4_ERROR = 'The param must to be an UUID v4 value';
const RESOURCE_NOT_FOUND = 'Resource not found';

function itsMissing(msg: string): string {
  return `${msg} is missing and it are necessary for this action`;
}

function invalidParams(param: string): string {
  return `${param} are not valid`;
}

function notFound(param: string): string {
  return `${param} was not found in the database`;
}

function permissionDenied(param: string): string {
  return `${param} does not have permission for this action`;
}

function alreadyDeleted(param: string): string {
  return `${param} was already deleted from database`;
}

function anySpecialCharacters(param: string): string {
  return `The property ${param} should not have any special characters`;
}

export {
  itsMissing,
  invalidParams,
  notFound,
  permissionDenied,
  anySpecialCharacters,
  alreadyDeleted,
  MISSING_ENVS,
  INTERNAL_SERVER_ERROR,
  MISSING_PARAMS_REQUEST,
  NOT_UUID_V4_ERROR,
  RESOURCE_NOT_FOUND,
};
