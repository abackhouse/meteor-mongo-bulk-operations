(function() {
  'use strict';
  
  // Just basic insert for the moment - add proper checks etc
  if(Meteor.isServer) {
    
    Mongo.Collection.prototype.bulkInsert = function(docs){
      
      var collectionObj = this.rawCollection();
      var wrappedFunc = Meteor.wrapAsync(collectionObj.insert, collectionObj);
      
      docs.forEach(function(doc) { doc._id = Random.id(17); });
      
      return wrappedFunc(docs);
        
    };
    
  }    

})();
