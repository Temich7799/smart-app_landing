const { task, watch, series, parallel, src, dest } = require('gulp');
const { sync, logError } = require('gulp-sass')(require('sass'));

function buildStyle() {
    return src('./**/*.scss')
        .pipe(sync({ outputStyle: 'compressed' }).on('error', logError))
        .pipe(dest('./'));
};

task('default', (cb) => { watch('./**/*.scss', buildStyle); cb() })