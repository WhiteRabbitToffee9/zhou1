const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const webserver = require('gulp-webserver');
var browserify = require('gulp-browserify')
const url = require('url');

/**
 * js压缩 
 */
gulp.task('js', () => {
    gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

/**
 * css压缩 
 */
gulp.task('css', () => {
    gulp.src('./src/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
})

/**
 * sass编译
 */
gulp.task("sass", () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

/**
 * 开启服务
 */
gulp.task('server', function() {
    gulp.src('./src')
        .pipe(webserver({
            liverload: true,
            open: '/html/index.html',
            host: '127.0.0.1',
            port: '8080'
        }));
});

gulp.watch('./src/**/*.js', ['js']);
gulp.watch('./src/**/*.css', ['css']);
gulp.watch('./src/**/*.scss', ['sass']);


gulp.task('default', ['js', 'css', 'sass', 'server'], () => {
    console.log('自动执行');
})