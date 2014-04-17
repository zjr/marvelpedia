'use strict';

angular
  .module('marvelPediaApp', [
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'restangular'
  ])
  .config(['RestangularProvider', function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://gateway.marvel.com/v1/public');
    RestangularProvider.setDefaultRequestParams({apikey: '2b3213d7c8dd78f64c05f712cfbfa4ff'});
  }])
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

angular.module('marvelPediaApp')
    .factory('LoDash', ['$window', function($window){
      var _ = $window._;

      return _;
    }]);

angular.module('marvelPediaApp')
    .factory('_', ['LoDash', function(LoDash){
      return LoDash;
    }]);
