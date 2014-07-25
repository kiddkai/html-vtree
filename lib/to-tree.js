var VNode = require('vtree/vnode');
var VText = require('vtree/vtext');


function toTree(astObj) {
  if (astObj.type === 'text') {
    return new VText(astObj.data);
  }

  return new VNode(astObj.name, astObj.attribs, astObj.children.map(function(child) {
    return toTree(child);
  }));
}

module.exports = toTree;
