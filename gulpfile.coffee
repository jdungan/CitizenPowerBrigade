gulp        = require 'gulp'
coffee      = require 'gulp-coffee'
sourcemaps  = require 'gulp-sourcemaps'
nodemon     = require 'gulp-nodemon'
_           = require('underscore')


coffee_watch = 
  'coffee-routes' :
    src: './src/routes/*.coffee'
    dest: './routes/'
  'coffee-app' :
    src: './src/js/*.coffee'
    dest:'./public/js/'
  'coffee-root':
    src: './src/*.coffee'
    dest: ""

_.each coffee_watch, (value, key, list)->
  gulp.task key, ->
    gulp.src value.src
      .pipe sourcemaps.init()
      .pipe coffee {bare: true}
      .on 'error', console.log
      .pipe sourcemaps.write()
      .pipe gulp.dest value.dest

watch_list = _.map coffee_watch,(value,key)->key

gulp.task 'watch-routes',->
	nodemon 
		script: 'server.js'
		watch: 'routes'

watch_list.push('watch-routes')

gulp.task 'watch',watch_list,  ->
  _.each coffee_watch, (value,key,list)->
    gulp.watch value.src, [key]

gulp.task 'default', ['coffee-root','coffee-routes','coffee-app', 'watch'] 
