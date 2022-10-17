//Step#1 определяем необходимые пакеты и функции
const {src, dest, series, watch, parallel, task} = require('gulp')
const sync = require('browser-sync').create()
const fileinclude = require('gulp-file-include')
const clean = require('gulp-clean')
const sass = require('gulp-sass')(require('sass')) //именно так требует npm
const csso = require('gulp-csso') //для минимизации кода css
const autoprefixer = require('gulp-autoprefixer') //добавки для совместимости разл браузеров
const concat = require('gulp-concat') //??для соединения разных кусков scss в один файл
const group_media = require('gulp-group-css-media-queries') //собирает вниз файла медиазапросы
const imagemin = require('gulp-imagemin')
//import imagemin from 'gulp-imagemin' //new declaration

//Step#2 define the folders
const project_folder = 'dist' // endpoint folder for export
const sourse_folder = '#src'  // source folder for composition

//Step#3 define variables for extensions
let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/'
  },
  src: {
    //html: sourse_folder + '/*.html',
    //add the excluding rule
    html: [sourse_folder + '/*.html', '!' + sourse_folder + '/_*.html'],
    //css: sourse_folder + '/scss/style.scss',
    css: sourse_folder + '/scss/**.scss',
    js: sourse_folder + '/js/script.js',
    img: sourse_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}', //** meaning recoursive mode
    fonts: sourse_folder + '/fonts/*.ttf'
  },
  watch: {
    html: sourse_folder + '/**/*.html',
    css: sourse_folder + '/scss/**/*.scss',
    js: sourse_folder + '/js/**/*.js',
    img: sourse_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}' //** meaning recoursive mode
  },
  clean: './' + project_folder + '/'
}

  
//Step#5 launching server and refreshing after change files
function serve() {
  sync.init({
    //possible simple: sync.init({server: './dist'})
    server: {
      baseDir: './' + project_folder + '/'
    },
    port: 3001, //default 3000
    notyfy: false
  })
  //****watch('type of files', function).listener
 // watch(path.watch.html,series(html)).on('change', sync.reload)
  //watch(path.watch.css,series(scss)).on('change', sync.reload)
  //watch(path.watch.js,series(js)).on('change', sync.reload)
  //watch(path.watch.img,series(images)).on('change', sync.reload)
}

//Step#4 run like: gulp html. It's process to build progect in dist folder for export
const html = () => {
  return src(path.src.html)
    .pipe(fileinclude()) // application some parts to one. Default @@
    .pipe(dest(path.build.html)) // build processing
}

const images = () => {
  return src(path.src.img)
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
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
        })
      ])
    )
    .pipe(dest(path.build.img)) // build processing
}

const js = () => {
  return src(path.src.js)
    .pipe(fileinclude()) // application some parts to one. Default @@
    .pipe(dest(path.build.js)) // build processing
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
}

/* task('html1', html) // like exports.html1 */

const cleaner = () => {
  return src(project_folder + '/*', {read: false}) //delete only files
    .pipe(clean());
}

const scss = () => {
  //console.log(path.src.css)
  return src(path.src.css)
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(
      group_media()
    )
    .pipe(autoprefixer(
      ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
      { cascade: true }
    ))
    .pipe(concat('index.css')) //join all scss files to one
    .pipe(dest(path.build.css))
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

}

//task('cleaner', xx());

/* task('cleaner', function () {
  return src(project_folder, {read: false})
      .pipe(clean());
}); */


//exports.serve = serve
exports.scss = series(cleaner, scss)
exports.html = html
exports.cleaner = cleaner
exports.images = images
//exports.build = build
//exports.watch = watch
exports.default = series(cleaner, parallel(scss, js, images, html) , serve) //In this case, tasks a, b, and c will run in sequential order.
//exports.default = parallel(html, serve) the same //the tasks will run task a, b, and c at the same time.