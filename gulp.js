gulp.task('heroku', function () {
	return gulp.src(SCSS_SRC)
		.pipe(wait(500))
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: ['./bower_components/susy/sass', './bower_components/breakpoint-sass/stylesheets']
		}).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			browsers: ['>1%', 'last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./dist/css'));
});
