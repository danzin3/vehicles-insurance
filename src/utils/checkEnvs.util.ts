import { ErrorsMessages } from '../constants';

export async function checkEnvs(): Promise<boolean> {
  let resp = true;
  /** Aplication Environments */
  if (
    !process.env.APP_BASE_URL ||
    !process.env.APP_PORT ||
    !process.env.APP_PREFIX
  ) {
    resp = false;
  }

  /** Database Environments */
  if (
    !process.env.DB_HOST ||
    !process.env.DB_PORT ||
    !process.env.DB_USER_NAME ||
    !process.env.DB_PASSWORD ||
    !process.env.DATABASE_NAME ||
    !process.env.DATABASE_TESTING
  ) {
    resp = false;
  }

  if (!resp) {
    throw {
      message: ErrorsMessages.MISSING_ENVS,
    };
  }

  return true;
}
