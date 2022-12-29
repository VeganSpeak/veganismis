/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
const domain = "veganismis.test";
const homedir = "/Users/ryan";

module.exports = {
	proxy: "https://" + domain,
	host: domain,
	https: {
		key: homedir + "/.config/valet/Certificates/" + domain + ".key",
		cert: homedir + "/.config/valet/Certificates/" + domain + ".crt",
	},
	files: [
		"./src/**/*",
		"tailwind.config.js",
	],
	notify: false,
	open: false,
	ghostMode: false,
	reloadDelay: 500,
	injectChanges: false,
};
