

const states = {
	OPEN: Symbol('OPEN'),
	BLOCKED: Symbol('BLOCKED'),
	RESOLVED: Symbol('RESOLVED'),
	// Symbol.description still not supported by Node.js
	getDescription: state => state.toString().slice(7, -1),
};

module.exports = states;
