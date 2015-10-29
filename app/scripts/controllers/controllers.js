'use strict';

var studioDbApp = angular.module('studioDBApp', []);

studioDbApp.controller('StudioListCtrl', function ($scope) {
    $scope.filters = {};
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

    $scope.orderProp = 'name';
});