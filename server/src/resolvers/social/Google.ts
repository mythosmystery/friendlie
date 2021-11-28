import { Arg, Mutation, Resolver } from 'type-graphql';
import { Auth } from '../../lib/types/AuthGQL';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
import { __secret__ } from '../../lib/utils/constants';

const client = new OAuth2Client(process.env.CLIENT_ID);

@Resolver()
export class GoogleResolver {
   @Mutation(() => Auth, { nullable: true })
   async googleSignIn(@Arg('tokenId') tokenId: string): Promise<Auth> {
      const ticket = await client.verifyIdToken({
         idToken: tokenId,
         audience: process.env.CLIENT_ID
      });

      const payload = ticket.getPayload();

      await User.upsert(
         {
            name: payload?.name,
            email: payload?.email,
            password: payload?.sub,
            googlePicture: payload?.picture
         },
         { conflictPaths: ['email'] }
      );
      try {
         const user = await User.findOneOrFail({ where: { email: payload?.email } });
         return { token: sign({ userId: user.id }, __secret__, { expiresIn: '15m' }), user };
      } catch (err) {
         console.log(err);
         throw new Error('error upserting user');
      }
   }
}
