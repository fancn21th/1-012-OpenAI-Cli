const ask = require('./ask');

module.exports = async () => {
	// inputs

	let apiKey = await ask({
		name: 'apiKey',
		message: `Would you mind provide your api key to openai ?`,
		hint: `think hard before reply`
	});

	// vars
	const vars = {
		apiKey
	};

	return vars;
};
