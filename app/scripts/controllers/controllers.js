'use strict';

var studioDbApp = angular.module('studioDBApp', []);

studioDbApp.controller('StudioListCtrl', ['$scope', function ($scope) {
    $scope.filters = {};
    $scope.friends = [
        {name:'John', phone:'555-1212', age:10},
        {name:'Mary', phone:'555-9876', age:19},
        {name:'Mike', phone:'555-4321', age:21},
        {name:'Adam', phone:'555-5678', age:35},
        {name:'Julie', phone:'555-8765', age:29}
    ];

    $scope.predicate = 'age';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.orderProp = 'name';

    $scope.studios = [
        {
            'name': 'ustwo',
            'location': 'London',
            'url': 'https://ustwo.com/',
            'category': 'Digital'
        },
        {
            'name': 'The Neighbourhood',
            'location': 'Manchester',
            'url': 'http://www.the-neighbourhood.com/',
            'category': 'Digital'
        },
        {
            'name': 'Animade',
            'location': 'London',
            'url': 'http://animade.tv/',
            'category': 'Animation, Digital'
        }
    ];

}]);