const userModel = require("../models/userModel");

module.exports.createUser = async ({firstname,lastname,email,password}) => {
    if(!firstname|| !email || !password){
        throw new Error("Please fill all the fields");
    }
    const user = await userModel.findOne({email});
    if(user){
        throw new Error("User already exists");
    }
    const hashedPassword = await userModel.hashPassword(password);
    return await userModel.create({fullname:{firstname,lastname},email,password:hashedPassword});
}