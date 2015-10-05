var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    return this.props.whenItemClicked(this.props.item);
    //instead on putting the line above on onClick
    //having handleClick callback is good for debugging
    //it is also a proxy method
  },
  render: function() {
    return <li className={this.props.className}>
              <a onClick={this.handleClick} >{this.props.item}</a>
          </li>
  }
});

