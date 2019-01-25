const authActions  = require("../actions/authActions.js");
const userActions =  require("../actions/userActions");

module.exports = {
	...userActions,
	...authActions
};