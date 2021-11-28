import { Resolver, Mutation, Arg } from 'type-graphql';
import { compare, hash } from 'bcryptjs';
import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
import { Auth } from '../../lib/types/AuthGQL';
import { __jwt_exp__, __secret__ } from '../../lib/utils/constants';

@Resolver()
export class UserMutationResolver {
   //login mutation
   @Mutation(() => Auth, { nullable: true })
   async login(@Arg('email') email: string, @Arg('password') password: string): Promise<Auth | null> {
      const user = await User.findOne({ where: { email } });

      if (!user) {
         throw new Error('Could not find user');
      }

      const valid = await compare(password, user.password);

      if (!valid) {
         throw new Error('Invalid password');
      }

      return { token: sign({ userId: user.id }, __secret__, { expiresIn: __jwt_exp__ }), user };
   }

   //register user mutation
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
      return { token: sign({ userId: user.id }, __secret__, { expiresIn: __jwt_exp__ }), user };
   }
}
