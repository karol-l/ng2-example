var gulp = require('gulp');
var sass = require('gulp-sass');

//var sassConfig = { outputStyle: 'compressed' };
var sassConfig = {};


gulp.task('base-sass', function() {
  return gulp.src('assets/base.scss')
		     .pipe(sass(sassConfig).on('error',sass.logError))
			 .pipe(gulp.dest('assets'))
});


gulp.task('app-sass', function() {
  return gulp.src('app/**/*.scss', { base: "./" })
		     .pipe(sass(sassConfig).on('error',sass.logError))
			 .pipe(gulp.dest('.'))
});



gulp.task('compile', ['base-sass', 'app-sass'], function(){
  gulp.watch('assets/base.scss', ['base-sass']); 
  gulp.watch('app/**/*.scss', ['app-sass']); 
})
