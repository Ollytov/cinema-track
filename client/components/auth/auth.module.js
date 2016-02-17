'use strict';

angular.module('cinemaTrackApp.auth', [
  'cinemaTrackApp.constants',
  'cinemaTrackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
