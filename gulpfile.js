// 导入
let {src,dest,watch} = require('gulp'),
htmlmin = require('gulp-htmlmin');
babel = require('gulp-babel');
imagemin = require('gulp-imagemin');
rename = require('gulp-rename');
uglify = require('gulp-uglify');
rename = require('gulp-rename');
sass = require('gulp-sass');
cssnano = require('gulp-cssnano');
concat = require('gulp-concat');
babel = require('gulp-babel');
imagemin = require('gulp-imagemin');
// index.html
function fnCopyIndex(){
    return src('../2005/src/index.html')
    .pipe(dest('../2005/dist'))
}
function fnLib(){
    return src('../2005/src/lib/*')
    .pipe(dest('../2005/dist/lib'))
}
// js
function fnJS(){
    return src('../2005/src/js/*')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('../2005/dist/js'));
} 
// img
function fnImg(){
    return src('../2005/src/img/*')
    .pipe(imagemin())
    .pipe(dest('../2005/dist/img'));  
}
// page
function fnpage(){
    return src('../2005/src/pages/')
    .pipe(htmlmin())
    .pipe(dest('../2005/dist/pages'));
}
// css
function fncss(){
    return src ('../2005/src/sass/*.sass')
    // .pipe(sass())
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('../2005/dist/scss'))
}

// 监听
function fnWatch(){
    watch('../2005/src/index.html',fnCopyIndex);
    watch('../2005/src/lib/**/*',fnLib);
    watch('../2005/src/js/*',fnJS);
    watch('../2005/src/pages/',fnpage);
    watch('../2005/src/sass/*.scss',fncss);

}
// 导出
exports.copy = fnCopyIndex;
exports.js = fnJS;
exports.img = fnImg;
exports.page = fnpage;
exports.css = fncss;
exports.lib = fnLib;
exports.default = fnWatch
