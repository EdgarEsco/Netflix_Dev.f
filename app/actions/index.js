const authActions  = require("../actions/authActions");
const userActions =  require("../actions/userActions");
const movieActions = require("../actions/movieActions");

module.exports = {
	...userActions,
	...authActions,
	...movieActions
};