vargulp = require("gulp");
varsass = require("gulp-sass");

gulp.task("sass", function () {
  gulp
    .src("./src/pagina-inicial/*.scss")
    .docs("./*.scss")
    .pipe(sass())

    .pipe(
      gulp.dest(function (f) {
        return f.base + "CSSFile";
      })
    );
});

gulp.task("default", ["sass"], function () {
  gulp.watch("./PATH/*scss", ["sass"]);
});

const getElement = document.getElementById("loginForm");

getElement.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "src/pagina-inicial/pagina-inicial.html";
});
