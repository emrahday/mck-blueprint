const fs = require('fs');
const states = require('./states');

const REPORT_PATH = './report.json';

const reportHandler = {

	// Reads report.json file content.
	// This function can be improved in order to handle missing report.json
	readReportFromJson: () => {
		const data = fs.readFileSync(REPORT_PATH);
		return JSON.parse(data);
	},

	// Returns list of report items read from report.json
	// Also filters elements according to given state OPEN, BLOCKED, RESOLVED
	getList: (stateFilter) => {
		const { elements } = reportHandler.readReportFromJson();
		return elements.filter(item => item.state === states.getDescription(stateFilter));
	},

	// Returns element in elements of report.json by given element ID
	get: (id) => {
		const { elements } = reportHandler.readReportFromJson();
		return elements.find(item => item.id === id);
	},

	// Set element state by given id and new state
	setState: (id, state) => {
		const data = reportHandler.readReportFromJson();
		const index = data.elements.findIndex(element => element.id === id);
		const newState = states.getDescription(state);
		data.elements[index].state = newState;
		reportHandler.writeReportJson(data);
	},

	// Re-write report.json data according to updated state of element
	writeReportJson: (data) => {
		fs.writeFileSync(REPORT_PATH, JSON.stringify(data, null, 2));
	},





};

module.exports = reportHandler;
