import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Profile extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Field()
   @Column()
   intro: string;

   @Field()
   @Column()
   age: number;

   @Field()
   @Column()
   gender: string;

   @Field()
   @Column()
   bio: string;

   @Field()
   @Column()
   picture: string;

   @Field(() => [String])
   @Column('text', { array: true })
   interests: string[];

   @Field(() => User)
   @OneToOne(() => User, user => user.profile)
   @JoinColumn()
   user: User;

   @Column()
   userId: string;
}
