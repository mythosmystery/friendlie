import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

   @Field(() => Profile, { nullable: true })
   @OneToOne(() => Profile, profile => profile.user, { nullable: true, eager: true })
   @JoinColumn()
   profile: Profile;

   @Column()
   password: string;
}
