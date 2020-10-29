const { dest, src, series, task } = require('gulp')
const jsdoc = require('gulp-jsdoc3')
const ts = require('gulp-typescript')

const eslint = require('gulp-eslint')
const gulpIf = require('gulp-if')

function isFixed (file) {
  return file.eslint !== null && file.eslint.fixed
}

task('eslint', () => {
  return src(['./**/*.ts', '!./node_modules/**/*.ts'])
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, dest('./')))
    .pipe(eslint.failAfterError())
})
task('scripts', function () {
  const tsconfig = require('./tsconfig.json')
  const filesGlob = tsconfig.filesGlob
  return src(filesGlob)
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(dest('./'))
})
task('default', series('eslint', 'scripts'))
