const ask = require('./ask');

module.exports = async () => {
	// inputs

	const q = await ask({
		name: 'q',
		message: `What's your question ?`,
		hint: `be kind or you will be insulted`
	});

	// vars
	const vars = {
		q
	};

	return vars;
};
