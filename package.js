Package.describe({
  name: 'coh:bulk-operations',
  summary: 'Bulk operations for Meteor',
  git: 'https://github.com/clappingonehand/meteor-mongo-bulk-operations.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.4');
  
  api.use(['mongo'], 'server');
  api.add_files('bulk_insert.js', 'server');
});

Package.on_test(function(api) {
// TODO



});
