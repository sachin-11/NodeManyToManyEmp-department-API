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

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });

//Reverse populate with virtuals
EmployeeSchema.virtual('department', {
  ref: 'Department',
  localField: '_id',
  foreignField: 'employees',
  justOne: false
})



 
module.exports = mongoose.model('Employee', EmployeeSchema);