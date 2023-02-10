#!/usr/bin/env node

/**
 * openai-cli
 * openai with cli as ui
 *
 * @author fan, yi-jie <fancn21th.cn>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
