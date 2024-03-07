// se crea una consulta para crear y definir un schema
import {GREETING} from './Queries/Greeting'




import { GraphQLSchema, GraphQLObjectType } from 'graphql'
// un esquema necesita dos cosas consultas como un get y mutaciones 

//defiicnimos un rrot query o la consulta princiapl

const RootQuery = new GraphQLObjectType({

    name: 'RootQuery',
    fields: {
        greeting: GREETING
    }
 })
 export const schema = new GraphQLSchema ({
    query:RootQuery


})