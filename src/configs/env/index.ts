export default () => ({
  application: {
    environment: process.env.NODE_ENV || "dev",
    url: process.env.APP_URL,
    port: parseInt(process.env.APP_PORT),
    prefix: process.env.APP_PREFIX.toString(),
  },
  tests: {
    maxRecords: parseInt(process.env.MAX_CHARGE_TEST) || 25,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
