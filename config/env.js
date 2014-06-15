
// environment variable packaging

module.exports = {
	title: process.env.ST_TITLE || 'Stark Blog',
	lastMod: new Date().toJSON().slice(0,10)
};