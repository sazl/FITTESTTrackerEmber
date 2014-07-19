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

app.import('vendor/jquery-ui/jquery-ui.js');
app.import('vendor/jquery-ui/themes/smoothness/jquery-ui.css');
app.import('vendor/jquery-ui/themes/smoothness/theme.css');

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
app.import('vendor/pace/themes/pace-theme-center-simple.css');

app.import('vendor/moment/moment.js');


app.import('vendor/ember-notify/dist/named-amd/main.js', {
  exports: { 'ember-notify': ['default'] } });
app.import('vendor/ember-notify/dist/ember-notify.css');

app.import('vendor/select2/select2.css');
app.import('vendor/select2/select2-bootstrap.css');
app.import('vendor/select2/select2.js');
var select2Assets = pickFiles('vendor/select2/', {
  srcDir: '/',
  files: ['**/*.png'],
  destDir: '/assets'
});

app.import('vendor/vis/dist/vis.js');
app.import('vendor/vis/dist/vis.css');

app.import('vendor/datatables/media/js/jquery.dataTables.js');
app.import('vendor/datatables/media/css/jquery.dataTables.css');
var tableAssets = pickFiles('vendor/datatables/media/images/', {
  srcDir: '/',
  files: ['**/*'],
  destDir: '/images'
});

app.import('vendor/ember-forms/dist/ember_forms.js');
app.import('vendor/ember-validations/dist/ember-validations.js');

module.exports = mergeTrees([
  app.toTree(),
  fontAssets,
  extraAssets,
  tableAssets,
  select2Assets
]);
