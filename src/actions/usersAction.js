const User =  require ('../models/users');

const getAllUsers = () =>{
    return User.find({
        is_active: true
    });
}
module.exports = {
    getAllUsers
}


