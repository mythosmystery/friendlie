import { User } from '../../entity/User';
import { Arg, Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../../lib/types/MyContext';
import { isAuth } from '../../lib/utils/isAuth';

@Resolver()
export class UserQueryResolver {
   //me query
   @Query(() => User, { nullable: true })
   @UseMiddleware(isAuth)
   async me(@Ctx() { payload }: MyContext): Promise<User | undefined> {
      if (!payload?.userId) {
         throw new Error('Not logged in');
      }
      return User.findOne(payload.userId);
   }

   //get all users
   @Query(() => [User])
   async getUsers(): Promise<User[]> {
      return await User.find({ relations: ['likes', 'likedBy'] });
   }

   //get one user by id
   @Query(() => User)
   async getUser(@Arg('id') id: string): Promise<User | undefined> {
      return await User.findOne({
         where: { id },
         relations: ['likes', 'likedBy']
      });
   }
}
