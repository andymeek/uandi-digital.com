/** @jsx React.DOM */
/*global document*/
var React = require('react/addons'),
	ReactApp = require('../../components/ReactApp'),
	mountNode = document.getElementById('react-main-mount');

React.render(new ReactApp({}), mountNode);