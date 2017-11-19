var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-clean-css');

var paths = {
  scripts: './project/web/frontend/static/js/app.js',
  app_paths: './project/web/frontend/static/js/**/*.*',
  vendor_styles: 'project/web/frontend/static/css/*.css',
  styles: 'project/web/frontend/static/less/*.less'
};

gulp.task('vendor-styles', function () {
    return gulp.src([paths.vendor_styles])
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('project/web/frontend/static/dist/css'));
});

gulp.task('styles', function () {
    return gulp.src([paths.styles])
        .pipe(less())
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('project/web/frontend/static/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.app_paths, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch', 'vendor-styles', 'styles']);