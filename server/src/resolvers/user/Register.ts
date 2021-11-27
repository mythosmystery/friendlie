import { Resolver, Mutation, Arg } from 'type-graphql';
import { hash } from 'bcryptjs';
import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
import { Auth } from '../../lib/types/AuthGQL';
import { __secret__ } from '../../lib/utils/constants';

@Resolver()
export class RegisterResolver {
   @Mutation(() => Auth)
   async register(
      @Arg('name') name: string,
      @Arg('email') email: string,
      @Arg('password') password: string
   ): Promise<Auth> {
      const hashedPassword = await hash(password, 12);
      const user = await User.create({
         name,
         email,
         password: hashedPassword
      }).save();
      return { token: sign({ userId: user.id }, __secret__, { expiresIn: '15m' }), user };
   }
}
