/*jslint node: true */
'use strict';

var oUtils = {};

oUtils.isDev = function isDev() {
	return __dirname === '/Users/andrewmeek/node/www/uandi-digital/app' ? true : false;
};

exports.utils = oUtils;