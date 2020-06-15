const express = require('express')
const router = new express.Router()
const Employee = require('../models/Employee');
const Department = require('../models/Department');
 
router.get( '/', (req, res) => {
  
  // Add Employee to MongoDB
  const  firstEmployee = new Employee({
       firstName: 'Sachin',
       lastName: 'Singh',
       description: "Works as it Department"
      
      });
  
  const  secoundEmploye = new Employee({
    firstName: 'Rahul',
    lastName: 'Singh',
    description: "Works as sales Department"
  });
  
  firstEmployee.save(function (err){
   if(err) return console.error(err.stack)
   console.log("FirstEmployee is added")
  });
  
  secoundEmploye.save(function(err){
    if(err) return console.error(err.stack);
    console.log("Secound Employee is added")
  })
  
  // Add Department to MongoDB
  var secoundDepartment = new Department({
    code: 'sales Department',
    description: 'Sachin and Rahul works in  sales department '
  });
  secoundDepartment.employees.push(firstEmployee._id, secoundEmploye._id);
  
  var firstDepartment = new Department({
    code: 'IT Department',
    description: 'rahul  works In IT  department '
  })
  firstDepartment.employees.push(secoundEmploye._id)
  
  firstDepartment.save(function(err){
    if(err) return console.log(err.stack);
    console.log("firstDepartment is added")
  });
  
  secoundDepartment.save(function(err){
    if(err) return console.log(err.stack);
    console.log("secoundDepartment is added");
  });
  
  // Return Message
  res.send("Done Initial Data!");
});


module.exports = router;
