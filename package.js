Package.describe({
  summary: "Bulk inserts for Meteor"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.4');
  
  api.use(['coffeescript', 'mongo'], 'server');
  api.add_files('bulk_insert.js', 'server');
});

Package.on_test(function(api) {
// TODO

});
