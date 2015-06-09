var gulp        = require('gulp');
var ts          = require('gulp-typescript');
var plumber     = require('gulp-plumber');
var rimraf      = require('gulp-rimraf');
var connect     = require('gulp-connect');
var open        = require('gulp-open');

var source      = 'src/**/*.ts';
var destination = 'app';
var tsOptions   = {
                     module: 'amd',
                     target: 'ES5',
                     typescript: require('typescript'),
                     isolatedCompilation: true
                   };

gulp.task('clean', function() {
    return gulp.src(destination + '/**/*.js', { read: false }) // much faster
        .pipe(rimraf());
});

gulp.task('ts', ['clean'], function() {
    return gulp.src(source)
        .pipe(plumber())
        .pipe(ts(tsOptions))
        .pipe(gulp.dest(destination))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['index.html', source], ['ts']);
});

gulp.task('open', ['ts'], function() {
    return gulp.src('./index.html')
        .pipe(open('', {
            url: 'http://localhost:8080',
            app: 'google chrome'
        }));
});

gulp.task('play', ['open', 'watch'], function() {
    connect.server({
        host:               '0.0.0.0',
        port:               8080,
        livereload: {
            port:           35729
        },
        root:               ['./']
    });
});

gulp.task('start', ['play']);
gulp.task('default', ['play']);
