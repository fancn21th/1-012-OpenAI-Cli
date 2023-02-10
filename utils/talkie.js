const questions = require('./questions');
const questionsApiKey = require('./questions-apikey');
const ai = require('./ai');

const log = console.log;

module.exports = async () => {
	let keys = await questionsApiKey();
	let vars = await questions();

	let response = await ai({ prompt: vars.q, apiKey: keys.apiKey });

	while (true) {
		if (Array.isArray(response.data.choices)) {
			result = response.data.choices[0].text;
		} else {
			result = response.data.choices.text;
		}

		log({ result });

		vars = await questions();
		response = await ai({ prompt: vars.q });
	}
};
