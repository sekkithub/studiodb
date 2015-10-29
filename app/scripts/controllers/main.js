'use strict';

/**
 * @ngdoc function
 * @name studioDbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studioDbApp
 */
angular.module('studioDbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
