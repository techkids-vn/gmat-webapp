'use strict';

angular.module('techkidsApp', [
  'techkidsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('create-edit-post', {
        url: '/create-post',
        templateUrl: 'app/post/create-post.html',
        controller: 'PostController',
        params: {post: {}}
      })  
    ;

    $locationProvider.html5Mode(true);
  });









