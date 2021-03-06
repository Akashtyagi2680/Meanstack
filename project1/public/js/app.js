'use strict'

var angular=require('angular');
require('angular-route');

var app=angular.module('merafilm',['ngRoute','angular.filter']);
require('./controller');
require('./service');

app.config(function($routeProvider,$locationProvider)
{
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController',
            access: { restricted: false}
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            access: { restricted: false }
          })
          .when('/logout', {
            controller: 'LogoutController',
            access: { restricted: true }
          })
          .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            access: { restricted: false }
          })
          .when('/home',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
          })
          .when('/theatre',{
            templateUrl:'views/theatre.html',
            controller: 'TheatreController'
          })
          .when('/movie',{
            templateUrl:'views/movie.html',
            controller: 'MovieController'
          })
          .when('/tmmovie',{
            templateUrl:'views/tmmovie.html',
            controller: 'TmmovieController'
          })
          .when('/Moviedetail',{
            templateUrl:'views/moviedetail.html',
            controller: 'MoviedetailController'
          })
          .when('/Seat',{
            templateUrl:'views/seat.html',
            controller: 'SeatController'
          })
          .when('/Payment',{
            templateUrl:'views/payment.html',
            controller: 'PaymentController'
          })
          .when('/Ticket',{
            templateUrl:'views/ticket.html',
            controller: 'TicketController'
          }).when('/Rating',{
            templateUrl:'views/rating.html',
            controller: 'RatingController'
          })
          .otherwise({
            redirectTo:'/',
          });
  });

  app.run(function($rootScope, $location, $route, AuthService) {
      $rootScope.$on('$routeChangeStart',
          function(event, next, current) {
              AuthService.getUserStatus()
                  .then(function() {
                      if (next.access.restricted && !AuthService.isLoggedIn()) {
                          $location.path('/login');
                          $route.reload();
                      }
                  });
          });
  });
