var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('./css/scss/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css/css'));
});
