const express = require('express')
const Department = require('../models/Department');
const Employee = require('../models/Employee')
const router = new express.Router()

 
 
router.get('/', async (req, res) => {
      try {
          const department = await Department.find().populate({
              path: 'employees',
              select: 'firstName'
          });
          res.status(200).json({ success: true, data: department})
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false , message: 'Server Error'})  
      }
});


router.get( '/:id'  , async (req, res) => {
    const department = await Department.findById(req.params.id).populate({
      path: 'employees',
      select: 'firstName lastName',
    });
  
    if (!department) {
      return next(new ErrorResponse(`No article with id ${req.params.id}`), 404);
    }
  
    res.status(200).json({ success: true,  data: department });
  });


module.exports = router;
