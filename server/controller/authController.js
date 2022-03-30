const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const loginModel = require('../models/loginModel');

//register user
//POST /auth/
const registerUser = asyncHandler(async (req, res) => {
    // console.log(req.body.name);
    //check req.body is exist
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.send(400);
        throw new Error('Please add all fields');
    }

    //check existing user
    const userExist = await loginModel.findOne({email});
    console.log(userExist);

    if(userExist) {
        res.send(400);
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await loginModel.create({
        username,
        email,
        password: hashedPassword,
    })
    console.log(user);

    if(user) {
        res.status(201).json({
            name: user.username,
            email: user.email
        })
    } else {
        res.send(400);
        throw new Error('Invalid user');
    }
    // res.json({ message: 'Resgister user' });
});

//authenticate a user
//POST /auth/login
const loginUser = (req, res) => {
    res.json({ message: 'Login User' });
}

//get user data (token or id)
//GET /auth/
const getUser = (req, res) => {
    res.json({ message: 'Get User' });
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}