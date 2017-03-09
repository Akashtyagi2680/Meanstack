'use strict'

module.exports = function($scope, $http,$rootScope,$location){
  //$rootScope.data="";

  //$scope.demo="Hello";
  var init = function(){
  $http.get('/theatreapi/gettheatre').then(successCallback, errorCallback);
  function successCallback(response)
  {
    $scope.theatreData=response.data;
  //  console.log(response.data);
  }
  function errorCallback(error)
  {
//      console.log(error);
  }
};
init();

$scope.addtheatre = function(ob){
  $scope.disabled = true;
  $scope.checked = true;
  $http.post('/theatreapi/addtheatre/'+ob.theatrename+"/"+ob.theatrecity).then(successCallback, errorCallback);
  function successCallback(response)
  {
  $scope.disabled = false;
  $scope.ob.theatrename='';
  $scope.ob.theatrecity='';
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



$scope.deletetheatre = function(theatre){
  window.location.reload();
  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/theatreapi/deletetheatre/'+theatre._id).success(function (response) {
  });
}
// window.location.reload();
  init();
  // alert('removed');
};

};
