/*global $ document */
'use strict';
var React = require('react'),
	ReactDOM = require('react-dom'),
	aRecentBuildsData = require('../../data/recentBuilds.js'),
	RecentBuilds = require('../../components/RecentBuilds.jsx'),
	oMountNode = null;

$(function () {
	oMountNode = document.getElementById('builds-container');
	if (oMountNode !== null) {
		ReactDOM.render(React.createElement(RecentBuilds, {
			companies: aRecentBuildsData
		}), oMountNode);

	}
});