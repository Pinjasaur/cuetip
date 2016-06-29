var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano"),
    rename = require("gulp-rename"),
    clean  = require("gulp-clean"),
    header = require("gulp-header"),
    pkg    = require("./package.json"),
    banner = ["/*!",
              " * <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %>",
              " * @author <%= pkg.author %> | @license <%= pkg.license %>",
              " */",
              ""].join("\n");

// SCSS, autoprefix, and minify src/
gulp.task("build", function() {
  return gulp.src("src/*")
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("dist/"))
    .pipe(cssnano({
       discardComments: {
        removeAll: true
      }
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("dist/"));
});

// watch for changes and rebuild CSS
gulp.task("watch", function() {
  gulp.watch("src/*", ["clean", "build"]);
});

// clean dist/
gulp.task("clean", function() {
  return gulp.src("dist/*", { read: false })
    .pipe(clean());
});

// default task is clean then build
gulp.task("default", ["clean"], function() {
  gulp.start("build");
});