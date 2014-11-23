var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    htmlreplace = require('gulp-html-replace');

//gulp.task('default', function() {
//    gulp.run('watcher', 'webserver');
//});

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true
        }));
});

gulp.task('watcher', function() {
    gulp.watch('app/**', function (event) {
        gulp.run('copy');
    });
});

gulp.task('copy', function(){
    gulp.src('app/index.html')
        .pipe(htmlreplace({
            'css': 'css/styles.css',
            'js' : 'js/main.js',
            'jslib': 'js/lib/jquery.js'
        }))
        .pipe(gulp.dest('build/'));

    gulp.src('app/index.html')
        .pipe(htmlreplace({
            'css': 'app/css/styles.css',
            'jslib' : 'bower_components/jQuery/dist/jquery.js',
            'js' : 'app/js/main.js'
        }))
        .pipe(gulp.dest(''));

    gulp.src('bower_components/jQuery/dist/jquery.js')
        .pipe(gulp.dest('build/js/lib/'));

    gulp.src('app/js/main.js')
        .pipe(gulp.dest('build/js/'));

    gulp.src('app/css/styles.css')
        .pipe(gulp.dest('build/css/'));

    gulp.src('app/structure.json')
        .pipe(gulp.dest('build/'));

    gulp.src('app/tasks/**')
        .pipe(gulp.dest('build/tasks'));
});