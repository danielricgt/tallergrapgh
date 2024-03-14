import { GraphQLID, GraphQLList, graphql } from 'graphql';
import {Users} from '../Entities/Users'
import { UserType } from "../schema/typeDefs/User";

export const GET_ALL_USERS = {

    type: new GraphQLList(UserType),
    async resolve(){
         
        return await Users.find()
    }
};

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve: async (_: any, args: any) => {
    const users = await Users.findByIds([args.id]);
    return users[0];
  },
};