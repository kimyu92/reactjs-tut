var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

//React, please render this class
var element = React.createElement(Dropdown, options);

//after rendering the class, please place it in the tag
//param: instance, target
React.render(element, document.querySelector('.container'));