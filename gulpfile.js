var gulp = require('gulp'),
  gutil = require('gulp-util'),
  del = require('del'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  srcmaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  plumber = require('gulp-plumber'),
  opn = require('opn'),
  pkg = require('./package.json'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  through = require('through'),
  path = require('path'),
  ghpages = require('gh-pages'),
  isDemo = process.argv.indexOf('demo') > 0;

gulp.task('default', ['clean', 'compile']);
gulp.task('demo', ['compile', 'watch', 'connect']);
gulp.task('compile', ['compile:lib', 'compile:demo']);
gulp.task('compile:lib', ['stylus', 'browserify:lib']);
gulp.task('compile:demo', ['jade', 'browserify:demo']);

gulp.task('watch', function() {
  gulp.watch('lib/*', ['compile:lib', 'browserify:demo']);
  gulp.watch('demo/src/*.jade', ['jade']);
  gulp.watch('demo/src/**/*.js', ['browserify:demo']);
});

gulp.task('clean', ['clean:browserify', 'clean:stylus', 'clean:jade']);
gulp.task('clean:browserify', ['clean:browserify:lib', 'clean:browserify:demo']);

gulp.task('clean:browserify:lib', function() {
  return del(['dist']);
});

gulp.task('clean:browserify:demo', function() {
  return del(['demo/dist/build']);
});

gulp.task('clean:stylus', function() {
  return del(['lib/tmp']);
});

gulp.task('clean:jade', function() {
  return del(['demo/dist/index.html']);
});

gulp.task('stylus', ['clean:stylus'], function() {
  return gulp.src('lib/theme.styl')
    .pipe(isDemo ? plumber() : through())
    .pipe(srcmaps.init())
    .pipe(stylus({
      'include css': true,
      'paths': ['./node_modules']
    }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(csso())
    .pipe(srcmaps.write('.'))
    .pipe(gulp.dest('lib/tmp'));
});

gulp.task('browserify', ['browserify:lib', 'browserify:demo']);

gulp.task('browserify:lib', ['clean:browserify:lib', 'stylus'], function() {
  return browserify({ debug: isDemo, standalone: 'bespoke.themes.fancy' })
    .add('./lib/bespoke-theme-fancy.js')
    .transform('brfs')
    .bundle()
    .pipe(source('bespoke-theme-fancy.js'))
    .pipe(buffer())
    .pipe(header([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' * This content is released under the <%= license %> license',
      ' */\n\n'
    ].join('\n'), pkg))
    .pipe(gulp.dest('dist'))
    .pipe(rename('bespoke-theme-fancy.min.js'))
    .pipe(uglify())
    .pipe(header([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %>, ',
      '<%= license %> License */\n'
    ].join(''), pkg))
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify:demo', ['clean:browserify:demo'], function() {
  return browserify({ debug: true })
    .add('./demo/src/scripts/main.js')
    .transform('brfs')
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(gulp.dest('demo/dist/build'))
    .pipe(connect.reload());
});

gulp.task('jade', ['clean:jade'], function() {
  return gulp.src('demo/src/index.jade')
    .pipe(isDemo ? plumber() : through())
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('demo/dist'))
    .pipe(connect.reload());
});

gulp.task('connect', ['compile'], function(done) {
  connect.server({
    root: 'demo/dist',
    livereload: true,
    port: 8081
  });

  opn('http://localhost:8081', done);
});

gulp.task('deploy', ['compile:demo'], function(done) {
  ghpages.publish(path.join(__dirname, 'demo/dist'), { logger: gutil.log }, done);
});
