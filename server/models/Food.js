/* eslint-disable no-undef */
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phone: Number,
    email: String,
    password: String
})


const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel