const fs = require('fs');
const states = require('./states');

const REPORT_PATH = './report.json';

const reportHandler = {

	getList: (stateFilter) => {
		const { elements } = reportHandler.readReportFromJson();
		return elements.filter(item => item.state === states.getDescription(stateFilter));
	},

	get: (id) => {
		const { elements } = reportHandler.readReportFromJson();
		return elements.find(item => item.id === id);
	},

	setState: (id, state) => {
		const data = reportHandler.readReportFromJson();
		const index = data.elements.findIndex(element => element.id === id);
		const newState = states.getDescription(state);
		data.elements[index].state = newState;
		reportHandler.writeReportJson(data);
	},

	writeReportJson: (data) => {
		fs.writeFileSync(REPORT_PATH, JSON.stringify(data, null, 2));
	},

	readReportFromJson: () => {
		const data = fs.readFileSync(REPORT_PATH);
		return JSON.parse(data);
	},

};

module.exports = reportHandler;
