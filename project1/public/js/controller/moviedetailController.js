module.exports = function($scope, $http,$rootScope,$location)
{

var init= function(){

$http.get('http://localhost:8040/mappingapi/getmapping').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.mappingdata=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
init();

$rootScope.loc1 = function(tc,tn,d,t)
{
  $rootScope.tcity=tc;
	$rootScope.tname=tn;
	$rootScope.date=d;
	$rootScope.time=t;

	$location.path("/Seat");
}



$scope.movdates=[];
var showdate = function()
{
  for(var i=0; i < 4; i++)
  {
    var date = new Date();
    date.setDate(date.getDate() + i);
    $scope.movdates[i]=date;
  }
};
showdate();


};
