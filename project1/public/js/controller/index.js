'use strict'

var app = require('angular').module('merafilm');

app.controller('HomeController',require('./homeController'));

app.controller('TheatreController',require('./theatreController'));

app.controller('MovieController',require('./movieController'));

app.controller('TmmovieController',require('./tmmovieController'));

app.controller('MoviedetailController',require('./moviedetailController'));

app.controller('SeatController',require('./seatController'));

app.controller('PaymentController',require('./paymentController'));

app.controller('TicketController',require('./ticketController'));

app.controller('RatingController',require('./ratingController'));

app.controller('LoginController', require('./loginController'));
app.controller('LogoutController', require('./logoutController'));
app.controller('RegisterController', require('./registerController'));
