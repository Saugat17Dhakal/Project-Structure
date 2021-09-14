const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const browserSync = require('browser-sync').create()

const style = () => {
    return gulp.src('./src/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./src/css')).pipe(browserSync.stream())
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'

        }
    })
    gulp.watch('./src/scss/**/*.scss', style)
    gulp.watch('./**/*.html').on('change', browserSync.reload)
    gulp.watch('/src/templates/*.html').on('change', browserSync.reload)
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch