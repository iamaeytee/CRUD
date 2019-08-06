const express = require ('express')
require('./db/mongoose1')
const UserData = require('./schemas/users')

const app= express()

const port = process.env.PORT || 8080

app.use(express.json());

app.post('/users',(req,res)=>{
   const user = new UserData(req.body)
   user.save().then(()=>{
       res.send(user)
   }).catch((error)=>{
       console.log(error)
   })
})

app.listen(port,()=>{
    console.log('Server listening on port',port);
})