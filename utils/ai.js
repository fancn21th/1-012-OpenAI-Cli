const { Configuration, OpenAIApi } = require('openai');
let configuration = null;
let openai = null;

const error = console.error;

module.exports = async ({ prompt, apiKey }) => {
	if (apiKey) {
		configuration = new Configuration({
			apiKey
		});

		openai = new OpenAIApi(configuration);
	}

	if (openai) {
		try {
			const response = await openai.createCompletion({
				model: 'gpt-3.5-turbo',
				prompt,
				max_tokens: 1000,
				temperature: 0
			});
			return response;
		} catch (err) {
			error({ err });
		}
	}
};
