(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticleCreateController', ArticleCreateController);

  ArticleCreateController.$inject = ['$scope', 'ArticlesService', '$state', '$window', 'Authentication'];

  function ArticleCreateController($scope, ArticlesService) {
    var vm = this;
    vm.createArticle = createArticle;
    $scope.articlesService = ArticlesService;
    function createArticle(formCreateArticle, data) {
      $scope.articlesService.save(data).$promise
        .then(function (response) { console.log('success', response); })
        .catch(function (response) { console.log('fail', response); });
    }

    vm.articles = ArticlesService.query();
  }
}());
