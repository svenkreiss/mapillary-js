var gulp = require('gulp')

var browserify = require('browserify')
var source = require('vinyl-source-stream')
var serve = require('gulp-serve')
var standard = require('gulp-standard')
var ts = require('gulp-typescript')
var tslint = require('gulp-tslint')

var paths = {
  mapillaryjs: 'mapillaryjs',
  ts: {
    src: './src/**/*.ts',
    dest: 'dist'
  },
  devFiles: {
    src: ['./dist/mapillary-js.css', './dist/bundle.js'],
    dest: 'debug'
  }
}

gulp.task('copy-dev-files', ['browserify'], function () {
  return gulp.src(paths.devFiles.src)
    .pipe(gulp.dest(paths.devFiles.dest))
})

gulp.task('serve', serve('.'))

gulp.task('js-lint', function () {
  return gulp.src('./Gulpfile.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('ts-lint', function () {
  return gulp.src(paths.ts.src)
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
})

gulp.task('typescript', function () {
  gulp.src(paths.ts.src)
    .pipe(ts({
      noImplicitAny: true,
      target: 'ES5',
      module: 'commonjs'
    }))
    .pipe(gulp.dest(paths.ts.dest))
})

gulp.task('watch-ts', function () {
  gulp.watch(paths.ts.src, ['typescript', 'browserify'])
})

gulp.task('browserify', ['typescript'], function () {
  var bundler = browserify({
    entries: './dist/Viewer.js',
    debug: true,
    fullPaths: false,
    standalone: 'mapillaryjs'
  })
   
  return bundler
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['serve', 'watch-ts'])
