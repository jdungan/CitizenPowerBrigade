express      = require('express');
path         = require('path');
favicon      = require('serve-favicon');
logger       = require('morgan');
cookieParser = require('cookie-parser');
bodyParser   = require('body-parser');
web_routes       = require('./routes/web');
api_routes       = require('./routes/api');

app = express();

# view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(favicon(__dirname + '/public/img/favicon.jpg'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api', api_routes)
app.use('/', web_routes)

# // catch 404 and forward to error handler
app.use (req, res, next) ->
  err = new Error 'Not Found'
  err.status = 404
  next err

# // error handlers
# // development error handler
# // will print stacktrace
if app.get('env') is 'development'
  app.use (err, req, res, next) ->
    res.status(err.status || 500)
    res.render 'error', {
      message: err.message,
      error: err
    }
        
# // production error handler
# // no stacktraces leaked to user
app.use (err, req, res, next) ->
  res.status(err.status or 500)
  res.render 'error', {
        message: err.message,
        error: {}
    }

app.set 'port', (process.env.PORT or 4013)

server = app.listen app.get('port'), ->
  console.log 'Express server listening on port ' + server.address().port
