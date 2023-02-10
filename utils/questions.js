const ask = require('./ask');

module.exports = async () => {
	// inputs
	const q = await ask({
		name: 'q',
		message: `What's your question ?`,
		hint: `be kind or you will be insulted`
	});

	const apiKey = await ask({
		name: 'apiKey',
		message: `Would you mind provide your api key to openai ?`,
		hint: `think hard before reply`
	});

	// vars
	const vars = {
		apiKey,
		q
	};

	return vars;
};
