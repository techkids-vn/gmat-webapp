/**
 * Created by Cragon on 4/1/2016.
 */
'use strict';
angular.module('techkidsApp')
  .controller('PostController', function($scope, $http, $state, $stateParams){
    CKEDITOR.replace( 'editor' );
    $scope.title = $stateParams.post.title;

    CKEDITOR.instances.editor.setData($stateParams.post.content);
    $scope.categories = [{name:"--Select category"}];
    $http.get('/api/post/categories').then(function(response){
      $scope.categories = $scope.categories.concat(response.data.data);
      //$scope.category = $stateParams.post.category;
      $scope.categories.forEach(function (element) {
        if(element.urlName===$stateParams.post.category){
          $scope.category = element;
        }
      });
    });
    $scope.submitPost = function () {
      console.log(CKEDITOR.instances.editor.getData());
      var data = {
        title : $scope.title,
        category : $scope.category,
        content : CKEDITOR.instances.editor.getData()
      };

      $http.post('/api/post/add', data).then(function (response){
        console.log(response.data);
        $state.go("main");
      })
    };
  })
