var React = require('react');
/*
var About = React.createClass({
    render: function() {
        return (
            <h3>About Component</h3>
        );
    }
}); */

var About = (props) => {
    return (
        <div>
        <h3>About!</h3>
        <p>This app is a simple weather app which provides current weather of your city. This is developed from React js.</p>
        </div>
    );
};
module.exports = About;