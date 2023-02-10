const ora = require('ora');
const { green: g, dim: d, yellow: y } = require('chalk');
const questions = require('./questions');
const questionsApiKey = require('./questions-apikey');
const ai = require('./ai');

const spinner = ora({ text: `` });

const log = console.log;

module.exports = async () => {
	let keys = await questionsApiKey();
	let vars = await questions();

	spinner.start(`\n${y('OpenAI')} 正在思考...\n\n${d('请等待...')}`);

	let response = await ai({ prompt: vars.q, apiKey: keys.apiKey });

	spinner.stop();

	while (true) {
		if (Array.isArray(response.data.choices)) {
			result = response.data.choices[0].text;
		} else {
			result = response.data.choices.text;
		}

		log({ result });

		vars = await questions();

		spinner.start(`\n${y('OpenAI')} 正在思考...\n\n${d('请等待...')}`);

		response = await ai({ prompt: vars.q });

		spinner.stop();
	}
};
