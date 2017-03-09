module.exports = function($scope, $http,$rootScope,$location)
{
//  $scope.movieData="";
//  $rootScope.data="";

var init = function(){
$http.get('/mappingapi/getmapping').then(successCallback, errorCallback);
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



var mov = function(){
$http.get('http://localhost:8040/movieapi/getmovie').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.moviedetails=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}

};
mov();





var thea = function(){

$http.get('http://localhost:8040/theatreapi/gettheatre').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.theatredetails=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}

};
thea();


$scope.addmapping = function()
  {
    $scope.mapping.Date=$('#datepicker').val();

  $http.post('/mappingapi/addmapping/',$scope.mapping).then(successCallback, errorCallback);
  function successCallback(response)
  {
  init();
  updatestatus();

  $scope.mappingdata='';

  window.location.reload();
  init();
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
window.location.reload();
};





$scope.deletemapping = function(mapping){
  window.location.reload();
  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/mappingapi/deletemapping/'+mapping._id).success(function (response) {
  });
}
 window.location.reload();
  init();
  alert('Not remove');
};



$scope.updatestatus= function()
{
var val ='true';
	$http.put('/movieapi/updatemovie/'+$scope.mapping.Title+'/'+val).then(successCallback, errorCallback);
	{
		alert(val);
		function successCallback(response)
 		 {console.log(response);}
		function errorCallback(error)
		{console.log(error);}
	}
};

};
