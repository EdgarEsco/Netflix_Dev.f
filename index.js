const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "799651B27B2E5D99D17C9CF6754B5",

		db: {
			url: "mongodb://Edgar:Sirtimo10@ds121183.mlab.com:21183/netflix_dev"
		},
		port: 3000
	},

	test: {

	},

	production: {

	}
};

module.exports = ENVS[NODE_ENV];