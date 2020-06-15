const Employee = require('./Employee');
const mongoose = require('mongoose'), Schema = mongoose.Schema;
 
const DepartmentSchema = mongoose.Schema({
    code: String,
    description: String,
  employees : [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});
 
module.exports = mongoose.model('Department', DepartmentSchema);
