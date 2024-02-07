const mongoose = require('mongoose');


// for the mongo db database 
const urlSchema = new mongoose.Schema({
    shortID :{
        type : String,
        required :true,
        unique:true,

    },
    redirectUrl:{
        type: String,
        required:true,

    },
    visitTime: [{timestamp:{ type:Number},}],
    

},
//this will add the created at and the updated adt when the schmea is created 
{timestamps:true}
)