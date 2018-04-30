module.exports = function () {

  $.gulp.task('styles', function () {
    return $.gulp.src('source/style/app.pcss')
      .pipe($.gp.postcss($.PATH.postPlugins))
      .pipe($.gp.rename('app.css'))
      .pipe($.gp.if(CONST.PRODUCTION,
        $.gp.uncss({
          html: [$.PATH.ROOT + '/**/*.html'],
          ignore: $.cssIgnore
        })))
      .pipe($.gp.if(CONST.PRODUCTION, $.gp.csso({
        restructure: false,
        sourceMap: false,
        forceMediaMerge: true,
        clone: false,
        comments: false,
        debug: false
      })))
      .pipe($.gulp.dest($.PATH.ROOT + '/assets/css'))
      .pipe($.browserSync.stream());
  });

};