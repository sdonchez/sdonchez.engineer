module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set('vue', '@vue/compat')
	},
	"entry": "index.js",
	/* ... */
}