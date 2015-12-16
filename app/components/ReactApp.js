/** @jsx React.DOM */

var React = require('react');

var ReactApp = React.createClass({
    componentDidMount: function () {
        console.log(fakeData);
    },
    render: function () {
        return (
            <div id="table-area">
                <h1>Andy</h1>
            </div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;