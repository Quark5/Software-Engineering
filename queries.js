/* Fill out these functions using Mongoose queries*/

var mongoose = require ('mongoose');
var config = require('./config');
var Listing = require('./ListingSchema.js');
var connection = mongoose.connect('mongodb://Quark5:tianbochen29@ds139360.mlab.com:39360/assignment3', {useMongoClient: true});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name: 'Library West'}, function (err, listing) {
	   if(err) throw err;
	   console.log('Library West Listing Info:' + '\n')
	   console.log('Code: ' + listing.code);
	   console.log('Name: ' + listing.name);
	   if (listing.coordinates) {
		   console.log('Coordinates: ' + '(' + listing.coordinates.latitude + ', ' + listing.coordinates.longitude + ')');
	   };
	   if (listing.address) {
		   console.log('Address: ' + listing.address);
	   }
	   console.log('\n');
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({ code: 'CABL'}, function(err) {
	   if (err) throw err;
	   console.log('Deleted CABL Listing');
	   console.log('\n');
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32611, United States'}, function(err, listing) {
	   if(err) throw err;
	   console.log('Updated Phelps Laboratory Listing Info: ');
	   console.log('Code: ' + listing.code);
	   console.log('Name: ' + listing.name);
	   if (listing.coordinates) {
		   console.log('Coordinates: ' + '(' + listing.coordinates.latitude + ', ' + listing.coordinates.longitude + ')');
	   };
	   if (listing.address) {
		   console.log('Address: 1953 Museum Rd, Gainesville, FL 32611, United States');
	   }
	   console.log('\n');
   }); 
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, listings) {
	   if(err) throw err;
	   console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();