//Step#1 определяем необходимые пакеты и функции
const gulp = require("gulp");
const { src, dest, series, watch, parallel, task } = require("gulp");
const sync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const clean = require("gulp-clean");
const sass = require("gulp-sass")(require("sass")); //именно так требует npm
const csso = require("gulp-csso"); //для минимизации кода css
const autoprefixer = require("gulp-autoprefixer"); //добавки для совместимости разл браузеров
const concat = require("gulp-concat"); //??для соединения разных кусков scss в один файл
const group_media = require("gulp-group-css-media-queries"); //собирает вниз файла медиазапросы
const imagemin = require("gulp-imagemin");
//import imagemin from 'gulp-imagemin' //new declaration
const webp = require("gulp-webp");
//const webphtml = require('gulp-webp-html') //copress html in line model
const webphtml = require("gulp-webp-html-fix");
const webpcss = require("gulp-webpcss");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const fonter = require("gulp-fonter");
const fs = require("fs");
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

//const usass = sass.compile('./scss/styles.scss')
const sassd = require('gulp-dart-sass');

const gutil = require("gulp-util");
const vftp = require("vinyl-ftp");

//Step#2 define the folders
const project_folder = "dist"; // endpoint folder for export
const source_folder = "#src"; // source folder for composition

//Step#3 define variables for extensions
let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
    njkTemplate: project_folder + "/templates",
    lib: project_folder + "/lib/" //папка для внешних библиотек. Вкл ккак табл стилей.
  },
  src: {
    //html: source_folder + '/*.html',
    //add the excluding rule
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    njk: [source_folder + '/**/*.+(html|nunjucks)',"!" + source_folder + '/**/_*.+(html|nunjucks)'],
    njkTemplate: source_folder + '/templates',
    //return gulp.src('#src/**/*.+(html|nunjucks)')
    //css: source_folder + '/scss/style.scss',
    scss: [source_folder + "/scss/**.scss", "!" + source_folder + "/_*.scss"],
    js: source_folder + "/js/script.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}", //** meaning recoursive mode
    fonts: source_folder + "/fonts/*.ttf",
    lib: source_folder + "/lib/**",
    dataJson: './' + source_folder +'/data.json'
  },
  watch: {
    html: source_folder + "/**/*.html",
    njk: source_folder + '/**/*.nunjucks',
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}", //** meaning recoursive mode
    lib: source_folder + "/lib/**"
  },
  clean: "./" + project_folder + "/",
};

//Step#5 launching server and refreshing after change files
function serve() {
  sync.init({
    //possible simple: sync.init({server: './dist'})
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3001, //default 3000
    notyfy: false,
  });
  //****watch('type of files', function).listener
  watch(path.watch.html, series(html)).on("change", sync.reload);
  watch(path.watch.css, series(scss)).on("change", sync.reload);
  watch(path.watch.js, series(js)).on("change", sync.reload);
  watch(path.watch.img, series(images)).on("change", sync.reload);
  watch(path.watch.njk, series(nunjucksBuild)).on("change", sync.reload);
  watch(path.watch.lib, series(lib)).on("change", sync.reload);
}

//Step#4 run like: gulp html. It's process to build progect in dist folder for export
const html = () => {
  return src(path.src.html)
    .pipe(fileinclude()) // application some parts to one. Default @@
    .pipe(webphtml()) //change tag <picture> </picture>
    .pipe(dest(path.build.html)); // build processing
};

const lib = () => {
  return src(path.src.lib)
    .pipe(dest(path.build.lib)); // build processing
};


const images = () => {
  return (
    src(path.src.img)
      /* *** Start webp dance *** npm i -D gulp-webp */

      .pipe(
        webp({
          quality: 70,
        })
      )
      .pipe(dest(path.build.img)) // build processing
      .pipe(src(path.src.img)) // build processing
      /* *** End webp dance *** */

      /* 
  npm i -D gulp-imagemin@7.1.0
  */
      .pipe(
        /*  freelancer setup
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      }) */

        //https://www.npmjs.com/package/gulp-imagemin article
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ])
      )
      .pipe(dest(path.build.img))
  ); // build processing
};

const js = () => {
  return src(path.src.js)
    .pipe(fileinclude()) // application some parts to one. Default @@
    .pipe(dest(path.build.js)); // build processing
  /* 
    npm i -D gulp-uglify-es  //compressing js files
    const uglify = require('gulp-uglify-es').default
    .pipe(uglify()) //compressing
     .pipe(
 	rename({
 		extname: '.min.js' //добавим расширение
 	})
   .pipe(dest(path.build.js)) // build processing
    */
};

/* task('html1', html) // like exports.html1 */

const cleaner = () => {
  return src(project_folder + "/*", { read: false }) //delete only files
    .pipe(clean());
};

const scss = () => {
  //console.log(path.src.css)
  return src(path.src.scss)
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(group_media())
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true,
      })
    )
    .pipe(concat("index.css")) //join all scss files to one
    .pipe(webpcss())
    .pipe(dest(path.build.css));
  /* 
     ...autoprefixer...
  ?? gulp-clean-css  gulp-rename
  ...pipe dest... //выгрузим осн файл
 .pipe(clean_css()) //сожмем
 .pipe(
 	rename({
 		extname: '.min.css' //добавим расширение
 	})
 ...pipe dest...  //выгрузим переимен копию
    */
  //.pipe(csso()) //compress mode //the same staff
  //.pipe(dest(path.build.css))
};

/* ====== Start Fonts Kingdom ===== */
const fonts = () => {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts));
};

const transformFonts = () => {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
};

const transformOtf2ttf = () => {
  return src([source_folder + "/fonts/*.otf"])
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(dest(source_folder + "/fonts/"));
};

const font_scss_clear = async done => {
  const fontFilename = source_folder + "/scss/_fonts.scss"
    fs.truncate(fontFilename, (err) => {console.log(err)})
    done()
};

/*  task('font_scss_clear1', done => {
  const fontFilename = source_folder + "/scss/_fonts.scss"
  fs.truncate(fontFilename, (err) => {console.log(err)})
  done();
});  */

//без этой строчки будет брыкаться
const fontAppendMixin =`
@mixin font($font_name, $file_name, $weight, $style) {

@font-face {
        font-family: $font_name;
        font-display: swap;
        src: url("../fonts/#{$file_name}.woff") format("woff"),
        url("../fonts/#{$file_name}.woff2") format("woff2");
        font-weight: #{$weight};
        font-style: #{$style};
    }
}

`

async function fontsStyle(cb) {
  const fontFile = source_folder + "/scss/_fonts.scss"

  let file_content = fs.readFileSync(fontFile);
  console.log("===" + fontFile);
  if (file_content == "") {
    console.log("file is empty ... processing ...");
    fs.writeFile(fontFile, "", cb);
    console.log("path.build.fonts: " + path.build.fonts);

    fs.appendFile(
      fontFile,
      fontAppendMixin,
      cb
    );
    // add Empty string for the beauty      
    fs.appendFile(
      fontFile,
      ' ',
      cb
    );
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        console.log("items.length: " + items.length);
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          console.log("fontname: " + fontname);
          if (c_fontname != fontname) {
            fs.appendFile(
              fontFile,
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
  cb();
}
/* ====== End Fonts Kingdom ===== */

/* ==== Start FTP Fingdom  ======================  */
/*           host: 'kmarx.ru/public_html/tmp/test1',
          user: 'kmarxru',
          pass: 'MuWmwzoUzH' */
/** Configuration **/
const user = "kmarxru";
const password = "MuWmwzoUzH";
const host = "kmarx.ru";
const port = 21;
const localFilesGlob = [path.build.html + "**/*"];
const remoteFolder = "/public_html/tmp/test1";

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
  return vftp.create({
    host: host,
    port: port,
    user: user,
    password: password,
    parallel: 10,
    log: gutil.log,
  });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
const ftpTx = () => {
  var conn = getFtpConnection();
  return gulp
    .src(localFilesGlob, { base: ".", buffer: false })
    .pipe(conn.newer(remoteFolder)) // only upload newer files
    .pipe(conn.dest(remoteFolder));
};

/* ==== End FTP Fingdom ============================  */

/* 
const html = () => {
  return src(path.src.html)
    .pipe(fileinclude()) // application some parts to one. Default @@
    .pipe(webphtml()) //change tag <picture> </picture>
    .pipe(dest(path.build.html)); // build processing
};

*/


/* const xx = async () => done => {
const fonts = () => {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts));
};

const transformFonts = () => {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
};

const transformOtf2ttf = () => {
};
 */

//exports.serve = serve
//exports.xx = xx;
//font_scss_clear
const fontsSource2dest = () => {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts));
};
njk: [source_folder + "/**."+"(html|nunjucks)", "!" + source_folder + "/_*.html"],
//njk: [source_folder + "/*."+"(html|nunjucks)", "!" + source_folder + "/_*.html"],
gulp.task('nunjucks', function() {

  return src(path.src.njk)
    // Adding data to Nunjucks
    .pipe(data(function() {
      return require(path.src.dataJson)
    }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: [path.src.njkTemplate]
    }))
  // output files in app folder
  .pipe(dest(path.build.html))
});


const nunjucksBuild = () => {
  return src(path.src.njk)
    // Adding data to Nunjucks
    .pipe(data(function() {
      return require(path.src.dataJson)
    }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: [path.src.njkTemplate]
    }))
  // output files in app folder
  .pipe(dest(path.build.html))
}

const nunjucksBuildcleanerTemplate = () => {
  return src(path.build.njkTemplate, { read: false }) //delete only files
    .pipe(clean());
};

//.pipe(dest(path.build.html)); // build processing

/* 
const cleaner = () => {
  return src(project_folder + "/*", { read: false }) //delete only files
    .pipe(clean());
};

*/
exports.lib = lib
exports.nunjucksBuild = nunjucksBuild
exports.nunjucksBuildcleanerTemplate = nunjucksBuildcleanerTemplate
exports.scss = series(cleaner, scss);
exports.ftpTxFull = series(cleaner, scss, js, images, html, ftpTx); //ftpTx
exports.ftpTx = ftpTx;
exports.font_scss_clear = font_scss_clear;
exports.fontsStyle = fontsStyle;


exports.html = html;
exports.scss = series(cleaner,scss);
exports.cleaner = cleaner;
exports.images = images;
//exports.build = build
//exports.watch = watch
//1. clear dest (туда будут складываться обр шрифты и анализироваться)
//2. Работает только с пустым файлом _fonts.scss 
//3. объеденить Font Family, но будет при обновлении одно да потому
//4. All operations are async. Let's font_scss_clear will be the first иначе по окоончании файд со шрифтами будет пустой. И операцию придется проводить еще раз.
exports.refreshFontsScss = series(font_scss_clear, cleaner, transformFonts, transformOtf2ttf,  fontsStyle)
//exports.default = series(cleaner, parallel(scss, js, images, html, transformFonts, transformOtf2ttf), serve); //In this case, tasks a, b, and c will run in sequential order.
exports.default = series(cleaner, lib, parallel(scss, js, images, 
  nunjucksBuild, 
  transformFonts, transformOtf2ttf), serve); //In this case, tasks a, b, and c will run in sequential order.

//exports.default = parallel(html, serve) the same //the tasks will run task a, b, and c at the same time.
