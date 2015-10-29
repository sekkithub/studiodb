'use strict';

/**
 * @ngdoc overview
 * @name studioDbApp
 * @description
 * # studioDbApp
 *
 * Main module of the application.
 */
angular
  .module('studioDbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
