const userModel = require("../models/userModel");
const userService = require("../services/user.services");
const{validationResult} = require("express-validator");

module.exports.registerUser = async (req, res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const{fullname,email,password} = req.body;
        const user = await userService.createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password});
        const token = await user.generateAuthToken();
        res.status(201).json({token,user});
    } catch (error) {
        next(error);
    }
}