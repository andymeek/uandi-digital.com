/*jslint node: true */
'use strict';

var oUtils = {};

oUtils.env = {};

oUtils.env.isDev = function () {
	return __dirname === '/Users/andrewmeek/node/www/uandi-digital' ? true : false;
}

exports.utils = oUtils;