var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('front/style/scss/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('front/style/dst/'));
});
