app.controller("myCtrl",["$scope","$http","myCommonServices","myFactory","$location",
	function($scope,$http,myCommonServices,myFactory,$location)
	{
		alert("Hello");
		$scope.name="Sai";
		$scope.address="Goshamahal";
		$scope.x;
		$scope.x = $scope.name + $scope.address;
		$scope.z = myCommonServices.add(5,10);


	}]);