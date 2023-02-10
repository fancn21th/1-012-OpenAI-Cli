const questions = require('./questions');
const ai = require('./ai');

const log = console.log;

module.exports = async () => {
	const vars = await questions();
	log({ vars });
	const response = await ai({ prompt: vars.q, apiKey: vars.apiKey });
	console.log({ data: response.data.choices.text });
};
