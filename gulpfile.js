import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from "gulp"
const sass = gulpSass(dartSass);

function scssTask() {
    return gulp.src("./scss/**/*.scss", { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css", { sourcemaps: "map/" }));
}
function watchTask() {
    gulp.watch(
        ["./**/*.scss"],
        gulp.series(scssTask)
    );
}

export default gulp.series(scssTask, watchTask)