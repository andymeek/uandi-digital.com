/*jslint node: true */
'use strict';

var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    oConfig = require('../config');

module.exports = function (app) {

    app.get('/', function (req, res) {
        oConfig.pageTitle = 'Andy Meek - Freelance Front End Developer | Mobile, tablet &amp; web developer - Sydney - U&amp;i Digital';
        oConfig.bodyClass = 'home';

        res.render('pages/index.ejs', {
            config: oConfig
        });
    });

    app.get('/services', function (req, res) {
        oConfig.pageTitle = 'UI/UX Development Services - U&amp;i Digital';
        oConfig.bodyClass = 'services';

        res.render('pages/services.ejs', {
            config: oConfig
        });
    });

    app.get('/recent-builds', function (req, res) {
        var aRecentBuildsData = require('../data/recentBuilds.js'),
            RecentBuilds = React.createFactory(require('../components/RecentBuilds.jsx')),
            reactHtml = ReactDOMServer.renderToString(RecentBuilds({
                companies: aRecentBuildsData
            }));

        oConfig.pageTitle = 'Recent builds - U&amp;i Digital';
        oConfig.bodyClass = 'recent-builds';

        res.render('pages/recent-builds.ejs', {
            reactOutput: reactHtml,
            config: oConfig
        });
    });

    app.get('/contact', function (req, res) {
        oConfig.pageTitle = 'Contact Andy Meek - U&amp;i Digital';
        oConfig.bodyClass = 'contact';

        res.render('pages/contact.ejs', {
            config: oConfig
        });
    });

    // 301s for old website's .php extenions
    app.get('/services.php', function (req, res) {
        res.redirect(301, '/services');
    });

    app.get('/recent-builds.php', function (req, res) {
        res.redirect(301, '/recent-builds');
    });

    app.get('/contact.php', function (req, res) {
        res.redirect(301, '/contact');
    });

    //Route not found -- Set 404
    app.get('*', function (req, res) {
        oConfig.pageTitle = '404 - Page not found- U&amp;i Digital';
        oConfig.bodyClass = 'home';

        res.render('pages/404.ejs', {
            config: oConfig
        });
    });

};