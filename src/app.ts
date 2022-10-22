import 'reflect-metadata';
import 'dotenv/config';
import { app } from './configs/express';

async function startApp() {
  try {
    app.listen(3000, () => {
      console.log(`All rigth, it's done! :) App is running on port: 3000`);
    });
  } catch (error) {
    console.error('\n Something wrong: ', error);
    process.exit(1);
  }
}

startApp();

export { app };
