const React = require('react');
const Company = require('./Company.jsx');

const RecentBuilds = (props) => {
    return (
        <div>
            {props.companies.map((company) => {
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
};

RecentBuilds.propTypes = {
    name: React.PropTypes.string,
    uri: React.PropTypes.string,
    logo: React.PropTypes.string,
};

module.exports = RecentBuilds;