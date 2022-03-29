//register user
//POST /auth/
const registerUser = (req, res) => {
    res.json({ message: 'Resgister user' });
}

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