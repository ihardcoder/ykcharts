var webpack = require('webpack');
var conf = require('./webpack.config.base.js');

console.log('Compiling......');

(webpack(conf)).run(function(err,stats){
  if(!err){
    console.log("Compile successfully!");
  }
});