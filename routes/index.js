
/*
 * GET home page.
 */
var fs = require('fs');
exports.index = function(req, res, next){
  var esc = req.param('_escaped_fragment_');
  if (esc){
    // Search bot fallback
    res.end('');
  } else {
    fs.readFile('/public/index.html', function(err, body){
      if (err) {
        next();
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', body.length);
      res.end(body);
    });
  }
};