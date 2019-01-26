const actions = require("../actions");


const signup = (_, args, context, info) => {
	return actions.signup(args.data).then(
		token => { return { "message": "User created successfully", token: token }; }
	).catch(e => e);

};


const updateUser = (_, args, context, info) => {
	return actions.updateUserById(args.id, args.data).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};



module.exports = {
	signup,
	updateUser
};