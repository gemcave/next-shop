const withCSS = require('@zeit/next-css');
require('dotenv').config()

const { 
	GRAPHCMSID,
	GRAPHCMSURL,
	APIURL,
	APIKEY,
	PROJECTID,
	BRANCH,
	CDNBASE
} = process.env;

module.exports = withCSS({
	publicRuntimeConfig: {
		graphcms: {
			GRAPHCMSID,
			GRAPHCMSURL,
			APIURL,
			APIKEY,
			PROJECTID,
			BRANCH,
			CDNBASE
		}
	}
})