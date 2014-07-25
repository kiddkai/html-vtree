HTML To VTree
=============

[![Build Status](https://travis-ci.org/kiddkai/html-vtree.svg?branch=master)](https://travis-ci.org/kiddkai/html-vtree)

Conver your html code to [vtree](https://github.com/Matt-Esch/vtree), base on 2 things:

1. [vtree](https://github.com/Matt-Esch/vtree)
2. [htmlparser2](https://github.com/fb55/htmlparser2/tree/master/test)

Install
-------

```bash
npm i --save html-vtree
```

Usage
------

```js
var htmlToVtree = require('html-vtree')

htmlToVtree('<div>hello world</div>', function(err, vtree) {
  // vtree will be a VirtualDom Object in vtree
  console.log(vtree);
});
```


MIT
----
