import express from "express";
// ejecuto express de esta forma me devuelve un objeto que lo voy a guardar en una constante llamada app
//confgiramos a hora grapghql para tener una funcion graphql http
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
const app = express()

app.use('/graphql', graphqlHTTP({

    graphiql: true,
    schema,
}))

export default app