module.exports = function () {
  let postPlugins = [
    require("postcss-import"),
    require('postcss-mixins'),
    require('postcss-cssnext'),
    require('rucksack-css'),
    require('postcss-short')
  ];

  $.gulp.task('styles', function () {
    return $.gulp.src('source/style/app.pcss')
      .pipe($.gp.postcss(postPlugins))
      .pipe($.gp.rename('app.css'))
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