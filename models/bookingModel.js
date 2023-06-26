const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    car : {type : mongoose.Schema.Types.ObjectId , ref:'Cars'},
    user : {type : mongoose.Schema.Types.ObjectId , ref:'User'},
    bookedTimeSlots : [{from : {type : String,} , to : {type : String}}],
    totalHours : {type : Number},
    totalAmount : {type : Number},
    transactionId : {type : String},
    driverRequired :{type: Boolean}
    

},
{timestamps : true}
)
const bookingModel = mongoose.model('bookings' , bookingSchema)
module.exports = bookingModel


