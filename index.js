var moment = require('moment');

module.exports = function(ligle){
  var Meta = ligle.base.model.ModelBase.extend({
    __className:'globals',
    __upDir:'globals',
    coll:{name:'globals',fields:{}},
    rest:{}
  });

  ligle.dbOpenedHooks.push(function(done){
    var meta = new Meta();
    meta.get({},function(err,obj){
      meta = obj || new Meta();
      ligle.globals = meta;
      ligle.globals.accessTime = moment().toISOString();
      if(err) {
        throw err;
      }
      done();
    });
  });
  
  ligle.exitHooks.push(function(done){
    ligle.globals.closeTime = moment().toISOString();
    ligle.globals.save(done);
  });
};
