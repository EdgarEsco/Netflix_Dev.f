const User =  require ('../models/users');

const getAllUsers = () =>{
    return User.find({
        is_active: true
    });
}
 
const createUser = (data) => {

	return User.create(data);

};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};

const getUserById = (id) => {
	return User.findOne({_id:id,is_active:true}).select("-password").populate("posts");
};

// const addUser = () =>{
    
// }
module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUserById
}


