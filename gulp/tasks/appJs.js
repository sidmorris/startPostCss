module.exports = function(){
 $.gulp.task('appJs', function () {
  return $.gulp.src('source/js/app.js')
    .pipe($.gp.concat('app.js'))
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/js'))
});
};