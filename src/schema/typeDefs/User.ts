import {GraphQLID, GraphQLObjectType, GraphQLScalarType, GraphQLString, graphql} from 'graphql'


export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        idUsers: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type:  GraphQLString},
        address: {type: GraphQLString},
        role:{type:  GraphQLString}
    }


}); 

