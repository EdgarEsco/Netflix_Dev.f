const User = require("../models/Users");


const createUser = (data) => {

	return User.create(data);

};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};



const getAllUsers = () => {
	return User.find({is_active:true}).select("-password").populate("posts");
};

module.exports = {
	createUser,
	getUserByEmail,
	getAllUsers,	
};
