const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref:'User'},
    car : {type : mongoose.Schema.Types.ObjectId , ref:'Cars'},
    totalHours : {type : Number},
    totalAmount : {type : Number},
    driverRequired :{type: Boolean},
    bookedTimeSlots : [{from : {type : String,} , to : {type : String}}],
    transactionId : {type : String},
    
    

},
{timestamps : true}
)
const bookingModel = mongoose.model('bookings' , bookingSchema)
module.exports = bookingModel


