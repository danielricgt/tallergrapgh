import { createConnection } from "typeorm"
import {Users} from '../Entities/Users'

export const connectDB =  async () => {

    await createConnection({
        type:  'mysql',
        username: 'root',
        password: 'str0ngP@sswo0rd',
        port: 3306,
        host: 'localhost',
        database: 'usersdb',
        entities: [Users],
        synchronize: true,
        ssl: false
    })
}
