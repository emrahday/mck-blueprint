const reportHandler = require('./report-handler');
const states = require('./states');

describe('report handler', () => {
	// Read data from report.json and check is it an object
	test('it should read content report.json and return', async () => {
		const data = reportHandler.readReportFromJson();
		expect(typeof data).toBe('object');
	});

	// First, get only OPEN state elements
	// Then, check is array returned
	// Then, check is the array size greather than 0
	// Finally, check each element state in array really OPEN
	test('it should return only open report list', () => {
		const data = reportHandler.getList(states.OPEN);
		expect(Array.isArray(data)).toBe(true);
		expect(data.length).toBeGreaterThan(0);
		data.forEach((element) => {
			expect(element.state).toBe(states.getDescription(states.OPEN));
		});
	});

	// First, get complete report list
	// Then, get the first element of list and check id in order to use valid id
	// Finally, get the element by valid id from the list
	test('it should return by id', () => {
		const data = reportHandler.getList(states.OPEN);
		const element = reportHandler.get(data[0].id);
		expect(typeof element).toBe('object');
		expect(element.id).toBe(data[0].id);
	});

	// First, get complete report list (report.json)
	// Then, set state of first element, write to file
	// Finally, get element from report.json by id and check whether state is updated
	// Revert state again
	test('it should change the state of report element by id', () => {
		const data = reportHandler.getList(states.OPEN);
		const newState = states.BLOCKED;
		const { id } = data[0];
		reportHandler.setState(id, newState);
		const dataUpdated = reportHandler.get(id);
		expect(dataUpdated.state).toBe(states.getDescription(newState));
		reportHandler.setState(id, states.OPEN);
	});
});
