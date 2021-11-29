import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
   @OneToOne(() => Profile, profile => profile.user, { nullable: true })
   profile: Profile;

   @Field(() => [User], { nullable: true })
   @ManyToMany(() => User, user => user.likedBy, { nullable: true })
   @JoinTable()
   likes: User[];

   @Field(() => [User], { nullable: true })
   @ManyToMany(() => User, user => user.likes, { nullable: true })
   likedBy: User[];

   @Column()
   password: string;
}
