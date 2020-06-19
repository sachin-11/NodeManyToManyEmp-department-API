const express = require('express')
const Employee = require('../models/Employee');
const router = new express.Router()


// Get All Students
router.get('/', async (req, res) => {
     try {
       const employee = await Employee.find().populate('department')
        res.status(200).json({ success: true, data: employee})
     } catch (error) {
       console.error(error.message);
       res.status(500).json({ success: false, message: 'Server Error'})
     }  

});
 





module.exports = router