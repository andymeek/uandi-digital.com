/** @jsx React.DOM */

var React = require('react'),
    RecentBuilds,
    Project;

RecentBuilds = React.createClass({
    render: function () {
        return (<div>
            {this.props.companies.map(function (company) {
                return (<Company key={company.id} name={company.name} uri={company.uri} logo={company.logo} />);
                
            })}
        </div>);
    }
});

Company = React.createClass({
    render: function () {
        return (
            <a href={this.props.uri} target={"_blank"}>
                <img src={this.props.logo} alt={this.props.name} />
            </a>
        );
    }
});

module.exports = RecentBuilds;