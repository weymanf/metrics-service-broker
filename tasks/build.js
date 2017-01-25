const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');

gulp.task('clean-build', done => del(['dist/**/*', '!dist/.gitkeep'], done));

gulp.task('copy-build-assets', () => {
    gulp.src(['index.js', 'bootstrap.js', 'service_broker.js'], {base: '.'}).pipe(babel()).pipe(gulp.dest('dist'));
});

gulp.task('build', (done) => {
  const originalNodeEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = 'production';
  return runSequence('clean-build', 'copy-build-assets', (err) => {
    process.env.NODE_ENV = originalNodeEnv;
    done(err);
  });
});