var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "pro",
    },
  });
});

gulp.watch("pro/*.html").on("change", reload);
gulp.watch("pro/*.js").on("change", reload);
