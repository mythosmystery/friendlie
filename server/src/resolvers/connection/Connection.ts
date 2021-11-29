import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../lib/types/MyContext';
import { isAuth } from '../../lib/utils/isAuth';

@Resolver()
export class ConnectionResolver {
   @UseMiddleware(isAuth)
   @Mutation(() => String)
   async likeUser(@Arg('id') id: string, @Ctx() { payload }: MyContext) {
      try {
         const user = await User.findOneOrFail({ where: { id: payload?.userId }, relations: ['likes'] });
         const likedUser = await User.findOneOrFail({ where: { id } });
         user.likes.push(likedUser);
         await user.save();
         return 'like ok';
      } catch (err) {
         console.log(err);
         throw new Error('error liking user');
      }
   }
}
