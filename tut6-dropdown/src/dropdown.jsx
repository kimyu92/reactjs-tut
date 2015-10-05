var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    //the state will be changed and it will rerender
    this.setState({
      open: !this.state.open
    });

    // this.state.open = false; //this pattern should not exist in React
  },
  getInitialState() {
      return {
        open: false
      };
  },
  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem item={item} />
    });

    return <div className="dropdown" > 
      <Button whenClicked={this.handleClick}
        buttonClassName="btn-default"
        title={this.props.title}
        subtitleClassName="caret"
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});