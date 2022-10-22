import express, {Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'

const app = express()

app.use(express())
app.use(cors())

const server = app.listen(process.env.DB_PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log("Thergezin is on Fire")
    }else{
        console.error("Deu ruim parceirin!")
    }
})

export default app