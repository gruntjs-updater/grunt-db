'use strict';

var dbMgrProvider = require('manage-database');
var join = require('path').join;
var _ = require('underscore');

module.exports = function(grunt) {

  function loadOpts(path) {
    var env = process.env.NODE_ENV || 'development';
    return require(join(process.cwd(), path))[env];
  }

  grunt.registerMultiTask('db', 'Manage databases', function () {
    var cmd = this.target;
    var name = this.data;
    var opts = this.options({
      user: 'postgres',
      database: 'template1',
      dialect: 'postgres'
    });

    if (opts.config) {
      opts = _.extend(opts, loadOpts(opts.config));
    }

    var done = this.async();

    var manager = dbMgrProvider(opts);

    switch(cmd) {
      case 'create':
        manager.create(name, done);
        return;
      case 'drop':
        manager.drop(name, done);
        return;
      default:
        grunt.fail.fatal(fmt('Unknown target: %s', cmd));
    }
  });
};
