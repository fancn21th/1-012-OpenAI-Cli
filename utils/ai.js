const { Configuration, OpenAIApi } = require('openai');
let configuration = null;
let openai = null;

module.exports = async ({ prompt, apiKey }) => {
	if (apiKey) {
		configuration = new Configuration({
			apiKey
		});

		openai = new OpenAIApi(configuration);
	}

	if (openai) {
		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt,
			max_tokens: 7,
			temperature: 0
		});

		return response;
	}
};
