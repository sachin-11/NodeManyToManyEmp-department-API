const mongoose = require('mongoose'), Schema = mongoose.Schema;
 
const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please add a  firstName'],
      },
      lastName: {
        type: String,
        required: [true, 'Please add a lastName'],
      },
      description: {
          type: String,
          trim: true,
          required: [true, 'Please add a description']
      }

});
 
module.exports = mongoose.model('Employee', EmployeeSchema);