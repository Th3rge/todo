import app from "./app";
import connection from "./connection";
import createUser from "./endpoints/createUser";

app.put('/user', createUser)


app.get("/user", async (req, res) => {
    try {
        const result = await connection.raw(`
        USE todo;
            
        SELECT * FROM to_do_list_users;
        `)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


app.post("/user", async (req, res)=> {
    try {      
        
        const newUser = {
            id: req.body.id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        } 

        await connection("to_do_list_users").insert(newUser)

        res.status(200).send("Dados enviados")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


app.get("/user/:id", async (req, res) => {
    try {
        const result = await connection("to_do_list_users")
        .where({id: req.params.id})

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})
