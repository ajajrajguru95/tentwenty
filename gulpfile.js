const  gulp        = require('gulp');
const  browserSync = require('browser-sync');
const  reload      = browserSync.reload;
const  sass        = require('gulp-sass');
const  concat      = require('gulp-concat');
const  plumber     = require('gulp-plumber');
const  notify      = require('gulp-notify'); 
//var autoprefixer = require('gulp-autoprefixer');
const  sourcemaps = require('gulp-sourcemaps');

// Define tasks after requiring dependencies
function style() {
    return (
        gulp
            .src([
              'sass/app.scss',
              'sass/*.scss',
              'sass/**/*.scss'
            ])
           .pipe(plumber({ errorHandler: function(err) {
                    notify.onError({
                        title: "Gulp error in " + err.plugin,
                        message:  err.toString()
                    })(err);
              }}))
           .pipe(sourcemaps.init())
           //.pipe(autoprefixer('last 2 versions'))
            // Use sass with the files found, and log any errors
            // .on("error", sass.logError)
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('app.css'))
            // What is the destination for the compiled file?
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest("./css"))
            .pipe(reload({stream:true}))
    );
}



function watch(){
    //   browserSync.init({
    //     // You can tell browserSync to use this directory and serve it as a mini-server
    //    proxy: "http://localhost/maxeta", //Change to your installed directory name
    //     notify: true
    //     // If you are already serving your website locally using something like apache
    //     // You can use the proxy setting to proxy that instead
    //     // proxy: "yourlocal.dev"
    // });
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change

      var files = [
      './sass/*.scss',
      './sass/**/*.scss',
      './*.html',
      './**/*.html',
      './js/*.js'
      ]

  //initialize browsersync
  browserSync.init(files, {
  //browsersync with a php server
    proxy: "http://localhost/tentwenty", //Change to your installed directory name
    notify: true
  })

    gulp.watch('sass/**/*.scss', style)
    // gulp.watch(files,reload);
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
// exports.style = style;

// Task gulp watch

exports.watch = watch


