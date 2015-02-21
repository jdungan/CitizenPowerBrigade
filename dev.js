var debug = require('debug')('cpb');
var app = require('./app');

app.set('port', process.env.PORT || 4013);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
