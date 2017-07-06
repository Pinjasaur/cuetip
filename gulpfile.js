var gulp    = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    pkg     = require("./package.json"),
    config = {
      banners: {
        full: [
          "/*!",
          " * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.description %>",
          " * On the web at <%= pkg.homepage %>",
          " * Written by <%= pkg.author %>",
          " * Licensed under <%= pkg.license %>",
          " */",
          ""
        ].join("\n"),
        min: [
          "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */",
          ""
        ].join("\n")
      },
      autoprefixer: {
        browsers: ["last 2 versions", "> 1%"]
      },
      csso: {
        comments: false
      },
      sass: {
        outputStyle: "expanded"
      }
    };

// SCSS, autoprefix, and minify src/
gulp.task("build", ["clean"], function() {
  return gulp.src("src/*.scss")
    .pipe(plugins.plumber())
    .pipe(plugins.sass.sync(config.sass))
    .pipe(plugins.autoprefixer(config.autoprefixer))
    .pipe(plugins.header(config.banners.full, { pkg: pkg }))
    .pipe(gulp.dest("dist/"))
    .pipe(plugins.csso(config.csso))
    .pipe(plugins.rename({ suffix: ".min" }))
    .pipe(plugins.header(config.banners.min, { pkg: pkg }))
    .pipe(gulp.dest("dist/"));
});

// watch for changes and rebuild CSS
gulp.task("watch", function() {
  gulp.watch("src/*.scss", ["build"]);
});

// clean dist/
gulp.task("clean", function() {
  return gulp.src("dist", { read: false })
    .pipe(plugins.clean());
});

// Set default task
gulp.task("default", ["watch"]);
