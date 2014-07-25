var test = require('tape')
  , parse = require('../lib/parse');

test('parse html', function(t) {
  t.plan(3);

  parse('<p>p</p>', function(err, dom) {
    t.equal(dom[0].type, 'tag');
    t.equal(dom[0].name, 'p');
    t.equal(dom[0].children.length, 1);
  });
});
