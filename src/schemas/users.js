const mongoose = require ('mongoose')
const validator = require('validator')

const UserData = mongoose.model('usersData',{
    firstName:{
        type: String,
        require: true,
        trim: true,
        minlength: 4
    },

    lastName:{
        type: String,
        // require: true,
        trim: true,
        minlength: 4
    },

    userName:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowerCase: true,
        minlength: 4
       
    },

    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 8,
        validator(value){
            if (value.tolowerCase().includes('password')){
                throw new Error('Please choose a strong password!')
            }
        }
    },

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid Email!')
            }
        }
    },

    age:{
        type: Number,
        require: true,
        trim: true,
        validate(value){
            if(value<13){
                throw new Error('Age should be greater than 13')
            }
        }
    }
})

module.exports = UserData