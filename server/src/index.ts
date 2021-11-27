import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { MyContext } from './lib/types/MyContext';
import { __dev_db__, __prod__ } from './lib/constants';
import { createDB } from './lib/createDB';
import HelloResolver from './resolvers/Hello';
import { MeResolver } from './resolvers/user/Me';
import { LoginResolver } from './resolvers/user/Login';
import { RegisterResolver } from './resolvers/user/Register';
import { GetUserResolver } from './resolvers/user/Get';

const main = async () => {
   await createDB();

   const schema = await buildSchema({
      resolvers: [HelloResolver, MeResolver, LoginResolver, RegisterResolver, GetUserResolver]
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
