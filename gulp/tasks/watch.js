module.exports = function(){
$.gulp.task('watch', function () {
  $.gulp.watch('source/js/**/*.js', $.gulp.series('appJs'));
  $.gulp.watch('source/style/**/*.pcss', $.gulp.series('styles'));
  $.gulp.watch('source/template/**/*.pug', $.gulp.series('pug'));
  $.gulp.watch('source/images/**/*.*', $.gulp.series('copy:image'));
});
};