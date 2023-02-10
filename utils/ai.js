const { Configuration, OpenAIApi } = require('openai');

module.exports = async ({ prompt, apiKey }) => {
	const configuration = new Configuration({
		apiKey
	});

	const openai = new OpenAIApi(configuration);

	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 7,
		temperature: 0
	});

	return response;
};
