const mongoose = require("mongoose");

const wordSchema = mongoose.Schema(
    {
        title:{ type: String},
        classNode: { type: String},
        description: { type: String},
        status: { type: String},
        email: { type: String}
    },
    {timestamps:true, versionKey: false}
);

const workModel = mongoose.model("works", workModel);

module.exports = workModel;
