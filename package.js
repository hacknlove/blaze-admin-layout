/* global Package */

Package.describe({
  name: 'hacknlove:blaze-admin-layout',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Es un helper para montar el layout y las rutas de un panel de administracións',
  // URL to the Git repository containing the source code for this package.
  git: 'git@hacknlove.github.com:hacknlove/blaze-admin-layout.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4')
  api.use('ecmascript')
  api.use('templating', 'client')
  api.use('less', 'client')
  api.addFiles('./hnlAdminLayout.html', 'client')
  api.addFiles('./hnlAdminLayout.less', 'client')
  api.mainModule('hnlAdminLayout.js', 'client')
})
