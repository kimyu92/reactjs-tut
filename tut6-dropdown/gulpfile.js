// V1
// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

// gulp.task('default',function(){
//   return gulp.src('src/**')
//     .pipe(react())
//     .pipe(concat('application.js'))
//     .pipe(gulp.dest('./'))
// });

// V2 broken
// gulp.task('default',function(){
//   var bundler = watchify(browserify({
//     entries: ['./src/app.jsx'],
//     transform: [reactify],
//     extension: ['.jsx'],
//     debug: true,
//     cache: {},
//     packageCache: {},
//     fullPaths: true
//   }));

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require('gulp-notify');


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  
  var props = {
    extensions: ['.jsx'],
    entries: ['./src/' + file],
    debug : true,
    transform:  [reactify],
    fullPaths: true
  };

  // watchify() if watch requested, otherwise run browserify() once 
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest('./build/'));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}


// run once
gulp.task('scripts', function() {
  return buildScript('app.jsx', false);
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts'], function() {
  return buildScript('app.jsx', true);
});