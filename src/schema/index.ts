// se crea una consulta para crear y definir un schema
import {GREETING} from '../Queries/Greeting'
import {CREATE_USER, DELETE_USER, UPDATE_USER} from '../schema/Mutations/Users'
import {GET_ALL_USERS, GET_USER} from '../Queries/User'




import { GraphQLSchema, GraphQLObjectType } from 'graphql'
// un esquema necesita dos cosas consultas como un get y mutaciones 

//defiicnimos un rrot query o la consulta princiapl

const RootQuery = new GraphQLObjectType({

    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER
    }
 });


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER
        
    },

})


 export const schema = new GraphQLSchema ({
    query:RootQuery,
    mutation: Mutation


})