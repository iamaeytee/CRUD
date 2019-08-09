const express = require('express')

require('./dbs/mongoose')
const userData = require('./schemas/usersShema')

const app = express()

app.use(express.json())

const port = process.env.PORT || 8080

app.post('/users',(req,res)=>{

    const user = new userData(req.body)

    user.save().then(()=>{
        console.log(user);
        res.send(user)
    }).catch((error)=>{
        res.status(400).send(error)
        console.log(error)
    })
})

app.get('/users',(req,res)=>{

    userData.find({}).then((userData)=>{
        res.send(userData)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


app.get('/users/:id',(req,res)=>{
    const _id = req.params.id

    userData.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }).catch((e)=>{
        res.status(500).send(e)
    })
})
app.listen(port,()=>{
    console.log('Server listening on port',port);
})
