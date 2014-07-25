var VNode = require('vtree/vnode');

function toTree(astObj) {
  return new VNode(astObj.name, astObj.attribs, astObj.children);
}


module.exports = toTree;
