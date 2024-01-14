const mongoose = require('mongoose');

// Schema design
const EmployeeSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  fatherName:String,
  motherName:String,
  address: String,
  gender: String,
  state: String,
  city: String,
  dob: String,
  pincode: String,
  course: String,
  email:String,
  password:String
});

const EmployeeModel = mongoose.model('employe', EmployeeSchema);
module.exports = EmployeeModel;
