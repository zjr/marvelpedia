'use strict';

angular
  .module('marvelPediaApp', [
    'ngCookies',
    'ngSanitize',
    'ui.router',
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
