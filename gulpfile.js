'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');
var minify = require('gulp-minify');
require('es6-promise').polyfill();


gulp.task('sass', function () {
    return gulp.src('./Resources/Private/Styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./Resources/Public/Styles/'));
});

gulp.task('webpack', function() {
    return gulp.src('./Resources/Private/JavaScript/app.js')
        .pipe(webpack(require('./Configuration/webpack.config.js')))
        .on('error', function () {
            this.emit('end');
        })
        .pipe(minify({
            ext:{
                src: '-debug.js',
                min: '.js'
            }
        }))
        .pipe(gulp.dest('./Resources/Public/JavaScript/'));
});

gulp.task('default', function () {
    gulp.watch('Resources/Private/Styles/**/*.scss', ['sass']);
    gulp.watch('Resources/Private/JavaScript/**/*.js', ['webpack']);
});