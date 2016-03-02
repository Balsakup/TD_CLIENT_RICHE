var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var bs   = require('browser-sync');

gulp.task('browserify', function() {

    return gulp.src('./src/js/app.js')
               .pipe($.plumber())
               .pipe($.browserify())
               .pipe($.rename('bundle.js'))
               .pipe(gulp.dest('./builds/js'))

});

gulp.task('serve', [ 'browserify' ], function() {

    bs.init({

        server: './'

    });

    gulp.watch('./src/js/*.js', [ 'browserify' ]);
    gulp.watch('./builds/js/*.js').on('change', bs.reload);
    gulp.watch('./*.html').on('change', bs.reload);

});