import 'reflect-metadata';
import dotenv from 'dotenv';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { MyContext } from './lib/types/MyContext';
import { __dev_db__, __prod__ } from './lib/utils/constants';
import { createDB } from './lib/utils/createDB';
import HelloResolver from './resolvers/Hello';
import { UserMutationResolver } from './resolvers/user/Mutation';
import { UserQueryResolver } from './resolvers/user/Query';
import { GoogleResolver } from './resolvers/social/Google';
import { ProfileResolver } from './resolvers/profile/Profile';
import { ConnectionResolver } from './resolvers/connection/Connection';

dotenv.config();

const main = async () => {
   await createDB();

   const schema = await buildSchema({
      resolvers: [
         HelloResolver,
         UserMutationResolver,
         UserQueryResolver,
         GoogleResolver,
         ProfileResolver,
         ConnectionResolver
      ]
   });

   const app = Express();

   const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: MyContext) => ({ req, res }),
      playground: true,
      introspection: true
   });

   apolloServer.applyMiddleware({ app });

   app.listen(process.env.PORT || 3001, () => {
      console.log(`server started on http://localhost:3001/graphql`);
   });
};

main();
