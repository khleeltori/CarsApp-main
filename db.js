const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://khleel2935:Khleelmosa2935@cluster0.xywxmgo.mongodb.net/AltoriCars',{useUnifiedTopology:true,useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected' , () => {
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , () => {
        console.log('Mongo DB Connection Error')
    })
    
}
 connectDB();
 module.exports = mongoose