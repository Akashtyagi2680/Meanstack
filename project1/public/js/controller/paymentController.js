module.exports = function($scope, $http,$rootScope,$location)
{

	$scope.addbooking=function()
	{

		$rootScope.cust=document.getElementById("name").value;
		$rootScope.eid=document.getElementById("email").value;
		$rootScope.no=document.getElementById("mobile").value;

		var a1=$rootScope.movie;
		var a2=$rootScope.tname;
		var a3=$rootScope.tcity;
		var a4=$rootScope.date;
		var a5=$rootScope.time;
		var a6=$rootScope.cust;
		var a7=$rootScope.eid;
		var a8=$rootScope.no;
		var a9=$rootScope.seat_n;
		var a10=$rootScope.count121;
		var a11=$rootScope.amount;

		  $http.post('/bookingapi/addbooking/'+a1+"/"+a2+"/"+a3+"/"+a4+"/"+a5+"/"+a6+"/"+a7+"/"+a8+"/"+a9+"/"+a10+"/"+a11).then(successCallback, errorCallback);
			{
			function successCallback(response)
			{}

			function errorCallback(error)
			{}
		};

		$location.path("/Ticket");
};
};
