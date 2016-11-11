/**
 * Created by poetries on 2016/11/8.
 */

var gulp = require("gulp");
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
var useref = require("gulp-useref");
var filter = require("gulp-filter");
var uglify = require("gulp-csso");
var csso = require("gulp-rev-replace");

gulp.task('default',function () {
    var jsFilter = filter("**/*.js",{restore:true});
    var cssFilter = filter("**/*.css",{restore:true});
    var indexHtmlFilter = filter(['*/*','!**/index.html'],{restore:true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));

});
