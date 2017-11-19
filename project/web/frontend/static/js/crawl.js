/**
 * @jsx React.DOM
 */

var React = require('react');
const Immutable = require('Immutable');
const http = require('http');
const createReactClass = require('create-react-class');

module.exports = createReactClass({

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState != this.state;
  },

  render: function() {
    return (
    	<div>
      		<h1>Hello World</h1>
    	</div>
    );
  }
});
