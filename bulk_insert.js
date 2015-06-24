(function() {
  'use strict';

  if(Meteor.isServer) {
    
    Mongo.Collection.prototype.bulkInsert = function(docs){

      docs.forEach(function(doc) { doc._id = Random.id(17); });
      
      var collectionObj = this.rawCollection();

      var wrappedFunc = Meteor.wrapAsync(collectionObj.insert, collectionObj);
      
      return wrappedFunc(docs);
        
    };
    
  }    


})();
