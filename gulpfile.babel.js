import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import connect from 'gulp-connect';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const dir = {
	src: 'src',
	dest: 'dist'
};

const stylesPath = {
	src: `${dir.src}/styles/*.scss`,
	dest: `${dir.dest}/css`
};

const scriptsPath = {
	src: `${dir.src}/scripts/*.js`,
	dest: `${dir.dest}/js`
};

gulp.task('styles',function (){
	gulp.src(stylesPath.src)
	.pipe(sass())
	.pipe(gulp.dest(stylesPath.dest))
	.pipe(connect.reload());
});

gulp.task('scripts', function(){
	return browserify({
		entries: ['./src/scripts/main.js']
	})
	.transform(babelify)
	.bundle()
	.pipe(source('bundle.js'))
    .pipe(gulp.dest(scriptsPath.dest))
    .pipe(connect.reload());
});

gulp.task('server', function() {
	connect.server({
		root: ['./'],
		livereload: true,
		port: 8888,
	});
});

gulp.task('watch', function(){
	gulp.watch(stylesPath.src, ['styles']);
	gulp.watch(scriptsPath.src, ['scripts']);
});

gulp.task('build', ['styles','scripts']);
gulp.task('default', ['styles','scripts','server','watch']);
