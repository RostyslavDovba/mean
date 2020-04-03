(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$scope', 'articleResolve', 'Authentication'];

  function ArticlesController($scope, article, Authentication) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;
    vm.addComment = addComment;
    vm.removeComment = removeComment;
    vm.saveComment = saveComment;
    vm.edit = edit;

    vm.commentsList = [];
    function addComment(data) {
        vm.commentsList.push(data);
        $scope.content = '';

    }

    function removeComment(index) {
      vm.commentsList.splice(index, 1);
    }
    
    function saveComment(data, index) {
      vm.commentsList[index] = data;
    }

    function edit() {
      // $scope.changedComment = '';
    }
  }
}());
