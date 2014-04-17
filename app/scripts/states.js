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
      resolve: {
        searchData: ['$stateParams', 'CharData', function ($stateParams, CharData) {
          return CharData.search($stateParams.name).then(function (data) {
            return CharData.update(data);
          });
        }]
      },
      controller: ['$scope', 'searchData', function ($scope, searchData) {
        $scope.characters = searchData;
      }]
    })
    .state('search.detail', {
      url: '/detail/:id',
      views: {
        'detail@search': {
          resolve: {
            characterData: ['searchData', '$stateParams', 'LoDash', function (searchData, $stateParams, _) {
              return _.find(searchData, function (i) {
                return i.id === parseInt($stateParams.id);
              });
            }],
            comicList: ['$stateParams', 'CharData', function ($stateParams, CharData) {
              return CharData.getComics($stateParams.id).then(function (data) {
                return data;
              });
            }]
          },
          controller: ['$scope', '$state', 'characterData', 'comicList', '$modal', function ($scope, $state, characterData, comicList, $modal) {
            $scope.character = characterData;
            $scope.comicImages = [];

            var comics = comicList.data.results;

            for (var i in comics) {
              for (var j in comics[i].images) {
                var imageObj = comics[i].images[j];
                $scope.comicImages.push(imageObj.path + '.' + imageObj.extension);
              }
            }

            var modalInstanceCtrl = function ($scope, $modalInstance) {
              $scope.close = function () {
                $modalInstance.dismiss();
              };
            };

            var modalInstance = $modal.open({
              templateUrl: 'views/searchDetail.html',
              controller: modalInstanceCtrl,
              scope: $scope
            });

            modalInstance.result.then(null, function () {
              $state.go('^');
            });

          }]
        }
      }
    });
}]);
