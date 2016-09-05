var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://testuser:05050505@ds019966.mlab.com:19966/testcollection";

var db = {
  getData : function(req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) {
       console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established to', url);
        var collection = db.collection('documents');
        var cursor = collection.find({});
        cursor.each(function (err, doc) {
          if (err) {
            return res.send(err);
            next();
          } else {
            return res.send(doc);
          }
        });
      }
    });
  },

  updateData : function(req) {
    console.log(req.body);
    var userData = {
      apperal : req.body.apperal,
      name : req.body.name,
      surname: req.body.surname,
      address: req.body.address,
      zip: req.body.zip,
      residence: req.body.residence,
      phone: req.body.phone,
      email: req.body.email,
      fax: req.body.fax,
      qualification: req.body.qualification,
      about: req.body.about,
      services: req.body.services
    };
    console.log(userData);
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      collection.remove({});
      collection.insert(userData);
    });

  },

  reloaddata : function(){
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      collection.remove({});
      var user = {
       apperal : "Mr.",
      name : "Max",
      surname: "Muster",
      address: "Breite Strabe 32",
      zip: 32345,
      residence: "Musterhausen",
      phone: "88005553555",
      email: "max@musterfirma.com",
      fax: "",
      qualification: [],
      about: "lorem ipsum",
      services: []
    }
    collection.insert(user, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 document into the document collection");
     });
    });
  }  
}


module.exports = db;
