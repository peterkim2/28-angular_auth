'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**', '**/**/*.js', '!build/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**', '**/**/*.js'], ['lint', 'test']);
});

gulp.task('default', ['dev']);
