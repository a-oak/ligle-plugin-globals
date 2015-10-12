ligle-plugin-globals
=============
[![Build Status](https://travis-ci.org/a-oak/ligle-plugin-globals.svg?branch=master)](https://travis-ci.org/a-oak/ligle-plugin-globals)
[![Build Status](https://travis-ci.org/a-oak/ligle-plugin-globals.svg?branch=develop)](https://travis-ci.org/a-oak/ligle-plugin-globals)
Copyright (c) 2015 [A-Oak](http://a-oak.com/) Co. Ltd. under MIT LICENSE.


## 安装

```shell
npm install ligle-plugin-globals --save
```

add this into your application to load the plugins

```js 
var ligle = require('ligle-engine')(cfg);
require('ligle-plugin-globals')(ligle);
```

you can use `ligle.globals` to save some global object for your
application.


## 介绍
这个是提供应用程序内全局变量的一个插件。

