'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('build', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['watch', 'build']);

