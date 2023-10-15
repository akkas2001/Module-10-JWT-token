const { strictTransportSecurity } = require("helmet");
const mongoose = require("mongoose");

const OTPSchema = mongoose.Schema(
    {
        email: { type: String},
        otp: { type: String},
        status: { type: String}
    }
)