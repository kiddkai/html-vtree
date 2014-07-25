var toTree = require('./lib/to-tree')
  , parse = require('./lib/parse');

module.exports = function htmlToVtree(html, fn) {
  parse(html, function(err, dom) {
    if (err) {
      return fn(err);
    }

    dom = dom.filter(function(el) {
      return !(el.type === 'text' && /[\n\r]+/.test(el.data))
    });

    if (dom.length > 1) {
      return fn(new Error('More than one root node in html'));
    }

    try {
      var tree = toTree(dom[0]);
      return fn(null, tree);
    } catch (e) {
      return fn(e);
    }
  });
};
