import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { Profile } from '../../entity/Profile';
import { MyContext } from '../../lib/types/MyContext';
import { isAuth } from '../../lib/utils/isAuth';

@InputType()
class ProfileInput implements Partial<Profile> {
   @Field()
   intro: string;

   @Field()
   age: number;

   @Field()
   bio: string;

   @Field()
   gender: string;

   @Field(() => [String])
   interests: string[];

   @Field()
   picture: string;
}

@Resolver()
export class ProfileResolver {
   @UseMiddleware(isAuth)
   @Mutation(() => Profile)
   async createProfile(@Arg('profileData') profile: ProfileInput, @Ctx() { payload }: MyContext) {
      try {
         await Profile.upsert(
            {
               ...profile,
               userId: payload?.userId
            },
            { conflictPaths: ['userId'] }
         );

         return await Profile.findOne({ where: { userId: payload?.userId } });
      } catch (err) {
         console.log(err);
         throw new Error('profile create error');
      }
   }

   @Query(() => [Profile])
   async getProfiles(): Promise<Profile[]> {
      return await Profile.find({ relations: ['user'] });
   }
}
