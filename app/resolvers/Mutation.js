const actions = require("../actions");

const updateUser = (_, args, context, info) => {
	return actions.updateUserById(args.id, args.data).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};

module.exports = {
    updateUser
};