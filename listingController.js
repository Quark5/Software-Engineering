
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	
	$scope.booleanify = function() {
	listings.map(function(entries) {
		return entries.details = false;
	});
	};

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		$scope.listings.push($scope.newRef);
		$scope.newRef = undefined;
	};
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index,1);
	};
    $scope.showDetails = function(index) {
		$scope.listings[index].details = !$scope.listings[index].details;
	};
  }
]);