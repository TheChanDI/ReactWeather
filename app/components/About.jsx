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
        <h1 className="text-center page-title">About this app</h1>
        <p>This app is a simple weather app which provides current weather of your city.
         This is built on React.</p>
        <p>
            Here are some of the tools i used:
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the 
                JavaScript framework used.
            </li>
            <li>
                <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used
                Open Weather Map to search for weather data by city name.
            </li>
            <li>
                <a href="https://foundation.zurb.com/" target="_blank">Zurb Foundation</a> - I used this framework
                for layouting and responsive.
            </li>
        </ul>
        </div>
    );
};
module.exports = About;