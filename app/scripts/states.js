'use strict';

angular.module('marvelPediaApp')
.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
}]);

angular.module('marvelPediaApp')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home'
    })
    .state('search', {
      url: '/search/:name',
      templateUrl: 'views/searchList.html',
      controller: function ($scope, $stateParams, Restangular) {
        Restangular.one('characters').get({nameStartsWith: $stateParams.name}).then(function(charactersObj) {
          $scope.characters = charactersObj.data.results;
        });
      }
    });
}]);
