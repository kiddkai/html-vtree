var test = require('tape')
  , toTree = require('../lib/to-tree')
  , isVNode = require('vtree/is-vnode')
  , parse = require('../lib/parse');


test('tag to tree', function(t) {

  t.plan(2);

  var vtree = toTree({
    type: 'tag',
    name: 'p',
    children: []
  });

  t.equal(vtree.tagName, 'p', 'should convert a dom node');
  t.equal(vtree.children.length, 0, 'should not have any children');

});


test('text to tree', function(t) {
  t.plan(1);

  var vtree = toTree({
    type: 'text',
    data: 'abc',
    children: []
  });

  t.equal(vtree.text, 'abc', 'should convert a text node');
});

test('nexted to tree', function(t) {

  t.plan(3);

  parse('<div><p>this is text</p></div>', function(err, dom) {
    dom = dom[0];
    var vtree = toTree(dom);

    t.equal(vtree.tagName, 'div', 'should parse the root node');
    t.equal(vtree.children[0].tagName, 'p', 'should parse the child node');
    t.equal(vtree.children[0].children[0].text, 'this is text', 'should parse the nexted text');
  });
});


test('tree with arrtibutes', function(t) {
  t.plan(1);

  parse('<div data-attr="yes"></div>', function(err, dom) {
    var vtree = toTree(dom[0])
    t.equal(vtree.properties.attributes['data-attr'], 'yes');
  });
});
