const express = require("express");
const router = express.Router();
const { createRazorpayOrder } = require("../controllers/payment");

// Create Razorpay order
router.post("/orders", createRazorpayOrder);

module.exports = router;
