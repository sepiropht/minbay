var http = require('http');
var serve = require('ecstatic');
var client = require('ssb-client')

exports.serve = function() {
  http.createServer(
    serve({ root: __dirname + '/build/'})
  ).listen(3000);
  
  opts = {"modern": true}
  
  client(function (err, sbot) {  
    if(err) throw err
    sbot.invite.create(opts, function (err, invite) {
      if(err) throw err
      var lite = invite
      console.log('Your lite client is now listening at http://localhost:3000\nHere\'s an invite\nhttp://localhost:3000#' + invite)
    })
  })
}