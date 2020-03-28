const withCSS = require('@zeit/next-css');
require('dotenv').config()

const { 
	GRAPHCMSID,
	GRAPHCMSURL,
	APIURL,
	APIKEY,
	PROJECTID,
	BRANCH,
	CDNBASE,
	domain,
  clientId,
  clientSecret,
  scope,
  redirectUri,
  postLogoutRedirectUri,
  cookieSecret
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
			CDNBASE,
		}
	},
	serverRuntimeConfig: {
    auth: {
      domain,
      clientId,
      clientSecret,
      scope,
      redirectUri,
      postLogoutRedirectUri,
    },
    cookieSecret,
  },
})