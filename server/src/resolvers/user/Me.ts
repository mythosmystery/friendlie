import { User } from '../../entity/User';
import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import { isAuth } from '../../lib/isAuth';
import { MyContext } from '../../lib/types/MyContext';

@Resolver()
export class MeResolver {
   @Query(() => User, { nullable: true })
   @UseMiddleware(isAuth)
   async me(@Ctx() { payload }: MyContext): Promise<User | undefined> {
      if (!payload?.userId) {
         throw new Error('Not logged in');
      }
      return User.findOne(payload.userId);
   }
}
