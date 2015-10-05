var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    alert('kimchi');
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
      <ul className="dropdown-menu show">
        {list}
      </ul>
    </div>
  }
});