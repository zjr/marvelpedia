'use strict';

angular.module('marvelPediaApp')
  .controller('MainCtrl', function ($scope, $http, MarvelService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.marvel = MarvelService;

    var apikey = '2b3213d7c8dd78f64c05f712cfbfa4ff';
    var version = '/v1/public';
    var baseUrl = 'http://gateway.marvel.com' + version + '/characters' + '?limit=100&apikey=' + apikey;

    $http({
      method: 'GET',
      url: baseUrl
    })
      .success(function() {
        $scope.result = arguments;
      })
      .error(function() {
        $scope.result = arguments;
      });

  });
