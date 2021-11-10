const mongoose = require("mongoose");

const departmentApi = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  dateJoining: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Department", departmentApi);
