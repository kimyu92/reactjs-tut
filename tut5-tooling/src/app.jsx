var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is fancy',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: 'See Tutorials',
    number: 20,
    header: 'Learn Gulp',
    description: 'Gulp with speed up your development',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};

//React, please render this class
var element = React.createElement(ThumbnailList, options);

//after rendering the class, please place it in the tag
//param: instance, target
React.render(element, document.querySelector('.container'));