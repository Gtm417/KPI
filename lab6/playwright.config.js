// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config= {
	retries: 1,
	use:{
		trace: 'retain-on-failure',
	},
};

module.exports =  config;