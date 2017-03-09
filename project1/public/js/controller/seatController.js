module.exports = function($scope, $http,$rootScope,$location)
{

  var hello123 = function()
  {
    var ti=  $rootScope.movie;
    var ci= $rootScope.tcity;
    var th=  $rootScope.tname;
    var ts=  $rootScope.time;

    $http.get('/bookingapi/blocking/'+ti+'/'+ci+'/'+th+'/'+ts).then(successCallback, errorCallback);
    function successCallback(response)
    {
        //console.log(response);
      $scope.bookinglength1 = response.data.length;
      $scope.bookinglength2 = response.data[0].Sname.length;
        $scope.bookinglength3 = response.data[0].Sname[0];

      for(var i=0;i<response.data.length;i++)
      {
        for(var j=0;j<response.data[i].Sname.length;j++)
        {
          //console.log(response[i].SeatNo);
          //console.log(response[i].SeatNo.length);
            $('#'+response.data[i].Sname[j]).attr('src','images/B_chair.png');
        }
      }
    }
    function errorCallback(error)
    {

    }
    };
hello123();

  $(function(){
    var count =0;
    var sn="";
    var seats=[];
    var amount = 0;

    $(".seat2").on('click', function() {
      var id = $(this).attr('id');
      var path = $('#'+id).attr('src');
      var x=path.substring(path.lastIndexOf('W'),path.length);
      var y=path.substring(path.lastIndexOf('G'),path.length);


      if ( x=="W_chair.png") {
        $('#'+id).attr('src','images/G_chair.png');
        count++;
        seats.push(id);
        $rootScope.seat_n = JSON.stringify(seats);
        document.getElementById("sea").innerHTML=seats;
      }

        else if (y=="G_chair.png")
        {
          $('#'+id).attr('src','images/W_chair.png');

           if(!count==0){
           var ind = seats.indexOf(id);
           seats.splice(ind,1);
           count--;

        }
      }
      amount = count*200;
      document.getElementById("sea").innerHTML = seats;
      document.getElementById("num1").innerHTML = amount;
      document.getElementById("num").innerHTML = count;
    });
  });


  $rootScope.pay = function()
  {
    $rootScope.seatno121=document.getElementById("sea").innerHTML;
    $rootScope.amount=document.getElementById("num1").innerHTML;
    $rootScope.count121=document.getElementById("num").innerHTML ;
    if($rootScope.seatno121 == '')
      {
        alert('please select seats');
      }
  else
    $location.path("/Payment");

  };
};
