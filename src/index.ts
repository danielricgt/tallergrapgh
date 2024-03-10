import app from "./app"
import { connectDB } from "./schema/db"


async function main() {
    
try{

    await connectDB()
//que escche en el purto 3000
    app.listen(3000)
    console.log('listening on port 3000')


}  catch(error){

    console.error(error)
}


}

main()



