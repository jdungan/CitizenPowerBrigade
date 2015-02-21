gulp = require 'gulp'
coffee = require 'gulp-coffee'
sourcemaps = require 'gulp-sourcemaps'
nodemon = require 'gulp-nodemon'

gulp.task 'default', ['coffee', 'watch'] 
gulp.task 'coffee', ->
  gulp.src './src/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee {bare: true}
		.on 'error', console.log
    .pipe sourcemaps.write()
    .pipe gulp.dest './routes/'

gulp.task 'watch',['coffee'],  ->
  gulp.watch './src/*.coffee', ['coffee']
	nodemon
		script: 'app.js'
		watch: 'routes'
