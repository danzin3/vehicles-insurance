import { Enviroments } from '../../enums';

export default () => ({
  application: {
    environment: process.env.NODE_ENV || 'dev',
    baseUrl: process.env.APP_BASE_URL,
    port: parseInt(process.env.APP_PORT),
    prefix: process.env.APP_PREFIX.toString(),
  },
  cors: {
    clientsOrigin: process.env.URL_CLIENTS_ACCEPTED
      ? process.env.URL_CLIENTS_ACCEPTED.split(' ')
      : [],
    methods: process.env.CORS_METHODS
      ? process.env.CORS_METHODS.split(' ')
      : [],
    credentials: Boolean(process.env.CORS_CREDENTIALS) || false,
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA || 'public',
    dbName:
      process.env.NODE_ENV === Enviroments.TESTING
        ? process.env.DATABASE_TESTING
        : process.env.DATABASE_NAME,
  },
});
