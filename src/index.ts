import app from "./app"
import { connectDB } from "./schema/db"
import {PORT} from './schema/config'


async function main() {
    
try{

    await connectDB()
//que escche en el purto 3000
    app.listen(PORT)
    console.log('listening on port', PORT)


}  catch(error){

    console.error(error)
}


}

main()



