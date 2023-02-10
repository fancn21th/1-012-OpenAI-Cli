const ora = require('ora');
const { green: g, dim: d, yellow: y } = require('chalk');
const questions = require('./questions');
const questionsApiKey = require('./questions-apikey');
const ai = require('./ai');

const spinner = ora({ text: `` });

const log = console.log;

const callAi = async (prompt, apiKey) => {
	spinner.start(`\n${y('OpenAI')} 正在思考...\n\n${d('请等待...')}`);

	let response = await ai({ prompt, apiKey });

	let result = null;

	if (Array.isArray(response.data.choices)) {
		result = response.data.choices[0].text;
	} else {
		result = response.data.choices.text;
	}

	spinner.stop();

	log({ result });

	return result;
};

module.exports = async () => {
	let keys = await questionsApiKey();
	let vars = await questions();

	await callAi(vars.q, keys.apiKey);

	while (true) {
		vars = await questions();

		await callAi(vars.q);
	}
};
