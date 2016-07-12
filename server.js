"use strict";

const express = require('express'),
    path = require('path'),
    compress = require('compression'),
    app = express(),
    utils = require('./app/utils').utils,
    port = utils.isDev() ? 4444 : 80;

// Make sure to include the JSX transpiler
require('node-jsx').install();
// G-Zip the response
app.use(compress());

function wwwRedirect(req, res, next) {
    'use strict';
    if (req.headers.host.slice(0, 4) === 'www.') {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
}
app.set('trust proxy', true);
app.use(wwwRedirect);

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./app/routes/core-routes.js')(app);

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);