import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  readonly age: number;
  readonly bio?: string;
  readonly likes?: (User | null)[];
  readonly matches?: (User | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userLikesId?: string;
  readonly userMatchesId?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}