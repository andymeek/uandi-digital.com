/*jslint node: true */
'use strict';

var oUtils = {};

oUtils.isDev = function isDev() {
    return (__dirname === '/Users/andrewmeek/node/www/uandi-digital/app' || __dirname ===  '/Users/andy.meek/Documents/work/clients/uandi-digital.com/app') ? true : false;
};

exports.utils = oUtils;