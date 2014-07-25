var test = require('tape')
  , htmlToVtree = require('..');


test('html to vtree', function(t) {
  t.plan(2);

  htmlToVtree('<body><p>hello world</p></body>', function(err, vtree) {
    t.equal(vtree.tagName, 'body');
    t.equal(vtree.children[0].tagName, 'p');
  });
});


test('report error when more than one root node', function(t) {
  t.plan(1);

  htmlToVtree('<div>a</div><section>b</section>', function(err) {
    t.equal(err.message, 'More than one root node in html');
  });
});

test('not report error when new lines in the front and end', function(t) {
  t.plan(1);

  htmlToVtree('\n<div>a</div>\n', function(err, vtree) {
    t.equal(vtree.tagName, 'div');
  });
});
