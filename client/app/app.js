'use strict';

angular.module('cinemaTrackApp', [
  'cinemaTrackApp.auth',
  'cinemaTrackApp.admin',
  'cinemaTrackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
