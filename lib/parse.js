var htmlParser = require('htmlparser2');

function parse(html, fn) {
  var handler = new htmlParser.DomHandler(function(err, dom) {
    fn(err, dom)
  });
  var parser = new htmlParser.Parser(handler);

  parser.write(html)
  parser.done();
}

module.exports = parse;
