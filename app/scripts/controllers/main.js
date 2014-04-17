'use strict';

angular.module('marvelPediaApp')
  .controller('MainCtrl', function ($scope, MarvelService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.marvel = MarvelService;
  });
