import { Field, ID, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn
} from 'typeorm';
import { Profile } from './Profile';

@ObjectType()
@Entity()
export class User extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Field()
   @Column()
   name: string;

   @Field()
   @Column('text', { unique: true })
   email: string;

   @Field({ nullable: true })
   @Column({ nullable: true })
   googlePicture: string;

   @Field(() => Profile, { nullable: true })
   @OneToOne(() => Profile, profile => profile.user, { nullable: true, eager: true })
   @JoinColumn()
   profile: Profile;

   @Field(() => [User], { nullable: true })
   @OneToMany(() => User, user => user.likedBy, { nullable: true })
   likes: User[];

   @Field(() => [User], { nullable: true })
   @ManyToOne(() => User, user => user.likes, { nullable: true })
   likedBy: User[];

   @Field(() => [User], { nullable: true })
   @OneToMany(() => User, user => user.matches, { nullable: true })
   matches: User[];

   @Column()
   password: string;
}
