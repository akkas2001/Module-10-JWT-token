const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
    {
        name:{ type:String},
        firstName:{ type:String},
        lastName:{ type:String},
        mobile:{ type:String},
        password:{ type:String ,required:true},
        address:{ type:String},
        class: { type: String}
    },
    {versionKey:false}
);
const StudentModel = mongoose.model("students",StudentSchema);

module.exports = StudentModel;