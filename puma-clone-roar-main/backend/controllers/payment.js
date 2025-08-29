const Razorpay = require("razorpay");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency,
      receipt: receipt || `rcptid_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
