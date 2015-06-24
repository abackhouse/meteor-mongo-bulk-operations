if Meteor.isServer
  Mongo.Collection.prototype.bulkInsert = (docs)
    collectionObj = @.rawCollection()

    wrappedFunc = Meteor.wrapAsync(collectionObj.insert, collectionObj)

    return wrappedFunc(docs)
    
    
