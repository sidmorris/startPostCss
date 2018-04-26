module.exports = function(){
  $.gulp.task('clear', function (cb) {
  return $.del($.PATH.ROOT, cb);
});
};