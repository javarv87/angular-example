var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('js-watch', browserSync.reload);
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch("app/js/*.js", ['js-watch']);
});
