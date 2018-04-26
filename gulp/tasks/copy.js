module.exports = function(){
 $.gulp.task('copy:image', function () {
  return $.gulp.src(['source/images/**/*.*', '!source/images/svg/**/*.*'], {
    since: $.gulp.lastRun('copy:image')
  })
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/img'));
});

$.gulp.task('copy:fonts', function () {
  return $.gulp.src('source/fonts/**/*.*')
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/fonts'));
});
};