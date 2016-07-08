'use strict';

const React = require('react');

class Company extends React.Component {
    render() {
        return (
            <a href={this.props.uri} target={"_blank"}>
                <img src={this.props.logo} alt={this.props.name} />
            </a>
        );
    }
}

class RecentBuilds extends React.Component{ 
    render() {
        return (
            <div>
            {this.props.companies.map((company) => {
                return (
                    <Company 
                        key={company.id}
                        name={company.name}
                        uri={company.uri}
                        logo={company.logo}
                    />
                );
            })}
            </div>
        );
    }
}

module.exports = RecentBuilds;