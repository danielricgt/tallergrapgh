import { createConnection } from "typeorm"
import {Users} from '../Entities/Users'
import './config'
import { BD_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DN_NAME } from "./config"



export const connectDB =  async () => {

    await createConnection({
        type:  'mysql',
        username: DN_NAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: BD_HOST,
        database: DB_NAME,
        entities: [Users],
        synchronize: true,
        ssl: false
    })
}
