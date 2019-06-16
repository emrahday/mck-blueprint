const reportHandler = require('./report-handler');
const states = require('./states');

describe('report handler', () => {
	test('report file should return object', async () => {
		const data = reportHandler.readReportFromJson();
		expect(typeof data).toBe('object');
	});

	test('it should return only open report list', () => {
		const data = reportHandler.getList(states.OPEN);
		expect(Array.isArray(data)).toBe(true);
	});

	test('it should return by id', () => {
		const data = reportHandler.getList(states.OPEN);
		const element = reportHandler.get(data[0].id);
		expect(typeof element).toBe('object');
		expect(element.id).toBe(data[0].id);
	});

	test('it should change the state of report element by id', () => {
		const data = reportHandler.getList(states.OPEN);
		const newState = states.BLOCKED;
		const { id } = data[0];
		reportHandler.setState(id, newState);
		const dataUpdated = reportHandler.get(id);
		expect(dataUpdated.state).toBe(states.getDescription(newState));
	});
});
