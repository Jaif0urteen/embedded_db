const mongoose = require('mongoose')

const ClauseSchema = new mongoose.Schema({
    clause_name:{
        type:String
    },
    clause_no:{
        type:String,
        
    },
    indate:{
        type:String
    },
    sub_clause: [
        {
            clause_level:String,
            sub_clause_no:String
        }
    ]
})

const Clause = new mongoose.model('Clause' , ClauseSchema)
module.exports = Clause