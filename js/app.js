var List =  {
	user: "Guest",
	Records: [
				{
				  	"name" : "James Butt",
				  	"area" : "New Orleans, Orleans",
				    "phone" : "651-603-1723",
				    "email" : "jbutt@gmail.com",
				    "order" : 15
				},
				{
					"name" : "Josephine Darakjy",
				    "area" : "New Orleans, Orleans",
				    "phone" : "202-555-0120",
				    "email" : "josephine_darakjy@darakjy.org",
				    "order" : 8
				},
				{
					"name" : "Art Venere",
				    "area" : "Bridgeport, Gloucester",
				    "phone" : "202-555-0149",
				    "email" : "art@venere.org",
				    "order" : 13
			    },
			    {
				    "name" : "Lenna Paprocki",
				    "area" : "Anchorage, Anchorage",
				    "phone" : "202-555-0198",
				    "email" : "lpaprocki@hotmail.com",
				    "order" : 17
			    }
			    // ,
			    // {
				   //  "name" : "Donette Foller",
				   //  "area" : "Hamilton, Butler",
				   //  "phone" : "202-555-0181",
				   //  "email" : "donette.foller@cox.net",
				   //  "order" : 33
			    // },
			    // {
				   //  "name" : "Simona Morasca",
				   //  "area" : "Ashland, Ashland",
				   //  "phone" : "202-555-0127",
				   //  "email" : "simona@morasca.com",
				   //  "order" : 45
			    // },
			    // {
				   //  "name" : "Mitsue Tollner",
				   //  "area" : "Chicago, Cook",
				   //  "phone" : "202-555-0194",
				   //  "email" : "mitsue_tollner@yahoo.com",
				   //  "order" : 12
			    // },
			    // {
				   //  "name" : "Leota Dilliard",
				   //  "area" : "San Jose, Santa Clara",
				   //  "phone" : "518-555-0129",
				   //  "email" : "leota@hotmail.com",
				   //  "order" : 15
			    // },
			    // {
				   //  "name" : "Sage Wieser",
				   //  "area" : "Sioux Falls, Minnehaha",
				   //  "phone" : "518-555-0118",
				   //  "email" : "sage_wieser@cox.net",
				   //  "order" : 88
			    // }

			]
		};


// Initializing module
var contactMgr = angular.module("contactMgr", ['ngRoute','ngResource'])

	.config(function ($routeProvider){

		$routeProvider.when("/", {
			templateUrl: "/cntmgr/views/list.html",
			controller: 'contactCtrl'
		});
		
		$routeProvider.when("/new", {
			templateUrl: "/cntmgr/views/add.html",
			controller: 'contactCtrl'
		});

		$routeProvider.when("/edit/:id", {
			templateUrl: "/cntmgr/views/edit.html",
			controller: 'editCtrl'
		});

		$routeProvider.when("/list", {
			templateUrl: "/",
			controller: 'contactCtrl'
		});

		$routeProvider.otherwise({ redirectTo: '/' });

	});

// Initializing controller
contactMgr.controller("contactCtrl", function($scope){
	$scope.contact = List;

	// Remove Records
	$scope.remove = function(index) {
		$scope.contact.Records.splice(index, 1);
	}

	// Add New Records
	$scope.add = function() {
		$scope.contact.Records.push({
			"name" : $scope.new_name,
			"area" : $scope.new_area,
			"phone" : $scope.new_phone,
			"email" : $scope.new_email,
			"order" : $scope.new_order
		});
			$scope.new_name = '';
			$scope.new_area = '';
			$scope.new_phone = '';
			$scope.new_email = '';
			$scope.new_order = '';
	};

});

// Update Records
contactMgr.controller("editCtrl", function($scope, $location, $routeParams){
	// console.log($scope.contact.Records[$routeParams.id])
	$scope.contact.Record = $scope.contact.Records[$routeParams.id];

	$scope.save = function() {
		$location.path("/");
	}

});