const express  = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel")
router.post("/bookcar", async (req,res) => {

    req.body.transactionId = '1234'
    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        res.send('Your booking is successfull')
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while booking the car');
    }
});

module.exports = router
