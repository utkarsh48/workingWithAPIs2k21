const random13 = () => Math.random().toString(16).replace("0.", "");

module.exports = {
	generateUID: () => (random13()+random13()+random13()).slice(0, 32)
}