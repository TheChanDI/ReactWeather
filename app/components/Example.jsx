var React = require('react');
var {Link} = require('react-router');
/*
var Example = React.createClass({
    render: function() {
        return (
            <h3>Example Component</h3>
        );
    }
}); */

var Example = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
         <li>
            <Link to='/?location=Bhaktapur'>Bhaktapur, NP</Link>
         </li>
         <li>
            <Link to='/?location=kathmandu'>New York, US</Link>
         </li>
         <li>
            <Link to='/?location=Pokhara'>Delhi, IN</Link>
         </li>
        </ol>
        </div>
    );
}
module.exports = Example;