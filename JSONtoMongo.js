'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
var connection = mongoose.connect('mongodb://Quark5:tianbochen29@ds139360.mlab.com:39360/assignment3', {useMongoClient: true});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

 var listings = require('./listings.json');
 for (var i = 0; i < listings.entries.length; i++) {
	 var addedListing = new Listing({
		 code: listings.entries[i].code,
		 name: listings.entries[i].name,
		 coordinates: listings.entries[i].coordinates,
		 address: listings.entries[i].address
	 })
	 var promise = addedListing.save();

 }

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */