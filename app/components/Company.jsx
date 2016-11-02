const React = require('react');

const Company = (props) => {
    return (
        <a href={props.uri} target="_blank">
            <img src={props.logo} alt={props.name} />
        </a>
    );
};

Company.propTypes = {
    uri: React.PropTypes.string,
    logo: React.PropTypes.string,
    name: React.PropTypes.string,
};

module.exports = Company;