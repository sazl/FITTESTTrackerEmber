/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/bootstrap/dist/css/bootstrap-theme.css');
app.import('vendor/bootstrap/dist/css/bootstrap-theme.css.map');

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var fontAssets = pickFiles('vendor/bootstrap/dist/fonts', {
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});
var extraAssets = pickFiles('vendor/bootstrap/dist/css', {
    srcDir: '/',
    files: ['bootstrap-theme.css.map'],
    destDir: '/assets'
});

app.import('vendor/pace/pace.js');
app.import('vendor/pace/themes/pace-theme-minimal.css');

app.import('vendor/moment/moment.js');
app.import('vendor/parsleyjs/dist/parsley.js');

app.import('vendor/ember-notify/dist/named-amd/main.js', {
  exports: { 'ember-notify': ['default'] } });
app.import('vendor/ember-notify/dist/ember-notify.css');

app.import('vendor/chosen/chosen.css');
app.import('vendor/chosen/chosen.jquery.js');

module.exports = mergeTrees([app.toTree(), fontAssets, extraAssets]);
