import { createConnection } from 'typeorm';
import { __dev_db__, __prod__ } from './constants';

export const createDB = async () => {
   if (__prod__) {
      await createConnection({
         type: 'postgres',
         url: process.env.DATABASE_URL,
         entities: ['dist/entity/*.*'],
         ssl: { rejectUnauthorized: false },
         synchronize: true
      });
   } else {
      await createConnection({
         name: 'default',
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'admin',
         password: 'password',
         database: __dev_db__,
         synchronize: true,
         entities: ['dist/entity/*.*']
      });
   }
};
