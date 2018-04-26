module.exports = function(){
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.PATH.ROOT
    });

    $.browserSync.watch([$.PATH.ROOT + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });

};