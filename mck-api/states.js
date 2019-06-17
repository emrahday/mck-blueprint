
// State Constants
// Used ES6 Symbol against simple string for preventaion of string conflict.
// Additionaly added getDescription method to get description of Symbol.
// Current ES version not supporting description but there is a proposal for ES.Next

const states = {
	OPEN: Symbol('OPEN'),
	BLOCKED: Symbol('BLOCKED'),
	RESOLVED: Symbol('RESOLVED'),
	// Symbol.description still not supported by Node.js
	getDescription: state => state.toString().slice(7, -1),
};

module.exports = states;
