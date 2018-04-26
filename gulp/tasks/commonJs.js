var uglify = require('gulp-uglify-es').default;


module.exports = function(){
$.gulp.task('commonJs', function () {
  return $.gulp.src($.PATH.JS)
    .pipe($.gp.concat('common.js'))
    .pipe(uglify())
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/js'))
});
};