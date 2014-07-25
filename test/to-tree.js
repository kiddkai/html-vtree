var test = require('tape')
  , toTree = require('../lib/to-tree')
  , isVNode = require('vtree/is-vnode');


test('to tree', function(t) {

  t.plan(2);

  var vtree = toTree({
    type: 'tag',
    name: 'p',
    children: []
  });

  t.equal(vtree.tagName, 'p');
  t.equal(vtree.children.length, 0);

});
