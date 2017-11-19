var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

var paths = {
  scripts: './project/web/frontend/static/js/app.js',
  app_paths: './project/web/frontend/static/js/**/*.*',
  vendor_styles: 'project/web/frontend/static/css/*.css',
  styles: 'project/web/frontend/static/less/*.less'
};

gulp.task('watch', function() {
  gulp.watch(paths.app_paths, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch']);