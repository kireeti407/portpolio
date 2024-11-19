const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    msg:{
        type:String,
        require:true
    }
})

const feed_data=mongoose.model("feed_data",schema)
module.exports=feed_data