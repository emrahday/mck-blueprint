const express = require('express');
const cors = require('cors');
const path = require('path');
const reportHandler = require('./report-handler');
const states = require('./states');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
	res.send(`mck api running ${new Date()}`);
});

app.get('/reports', (req, res) => {
	const data = reportHandler.getList(states.OPEN);
	res.send(data);
});

app.put('/reports/:id', (req, res) => {
	reportHandler.setState(req.params.id, states.RESOLVED);
	res.send({ id: req.params.id });
});

app.put('/reports/:id/block', (req, res) => {
	reportHandler.setState(req.params.id, states.BLOCKED);
	res.send({ id: req.params.id });
});

app.listen(9000, () => {
	console.log('Server listening port:9000 ...');
});
