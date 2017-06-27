var gulp=require('gulp');
var sass=require('gulp-sass');
var cleanCSS=require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('minimal', function() {
	return gulp.src(['./minimal*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('out'));
})