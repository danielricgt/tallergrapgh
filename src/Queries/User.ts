import { GraphQLList } from 'graphql';
import {Users} from '../Entities/Users'
import { UserType } from "../schema/typeDefs/User";

export const GET_ALL_USERS = {

    type: new GraphQLList(UserType),
    async resolve(){
         
        return await Users.find()
    }
}