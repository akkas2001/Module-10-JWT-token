const studentModel = require("../models/StudentModel");

///create student

exports.InsertStudent = (req, res) => {
    let reqBody = req.body;
    studentModel.create(reqBody, (err, data) => {
        if(err) {
            res.status(400).json({
                status: "fail",
                data: err
            });
        }
        else {
            res.status(200).json({
                status: "success",
                data:data
            })
        }
    })
}

////read student

exports.readStudent = (req, res) => {
    let Query =  {};
    let projection = "name password";
    studentModel.find(Query, projection, (err, data) => {
        if(err){
            res.status(400).json({
                status: "fail",
                data: err
            });
        }
        else {
            res.status(200).json({
                status: "success",
                data: data
            });
        }
    });
};

////update student

exports.updateStudent = (req, res) => {
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;
    studentModel.updateOne(Query, reqBody, (err, data) => {
        if(err) {
            res.status(400).json({
                status: "fail",
                data: err
            });
        }
        else {
            res.status(200).json({
                status: "success",
                data: data
            });
        }
    });
};

///delete student 

exports.deleteStudent = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id};
    studentModel.remove(Query, (err, data) => {
        if(err) {
            res.status(400).json({
                status: "fail",
                data: err
            });
        }
        else {
            res.status(200).json({
                status: "success",
                data:data
            })
        }
    });
};