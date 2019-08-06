var mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoosePrac',{
    useNewUrlParser: true,
    useCreateIndex: true
})



// input.save().then(()=>{
//     console.log(input);
// }).catch((error)=>{
//     console.log(error);
// })
