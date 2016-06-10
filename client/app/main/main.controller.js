'use strict';
angular.module('techkidsApp')
  .controller('MainController', function($scope, $http, $state){
    $scope.submitQuestion = function () {
      var data = {
        type : 'test type',
        sub_type: 'test type',
        stimulus: 'test type',
        stem: 'test type',
        answer_choices:   [
          {
            note: "",
            explanation: "Đáp án đúng",
            choice: "the stage personalities of the past would appeal on a personal level to people like the author",
            index: 0
          },
          {
            note: "",
            explanation: "Đáp án sai",
            choice: "their contemporaries would have understood famous actors",
            index: 1
          },
          {
            note: "",
            explanation: "Đáp án sai",
            choice: "the acting of famous stage personalities would appeal to us today",
            index: 2
          },
          {
            note: "",
            explanation: "Đáp án sai",
            choice: "Garrick was as great as he is portrayed",
            index: 3
          },
          {
            note: "",
            explanation: "Đáp án sai",
            choice: "historical records can reveal personality",
            index: 4
          }
        ],
        right_answer: 'test type'
      };


      $http.post('/api/gmat/post-question', data).then(function (response){
        console.log('insert oke!');
        $state.go("main");
      })
    };

    $scope.submitPack = function () {
      var data = {
        available_time: "2016-06-09",
        question_ids: [
          "575a5c8762a2ea18b0e62682",
          "575a5c8962a2ea18b0e62683",
          "575a5c8962a2ea18b0e62684",
          "575a5c8962a2ea18b0e62685",
          "575a5c8a62a2ea18b0e62686",
          "575a5c8a62a2ea18b0e62687",
          "575a5c8a62a2ea18b0e62688",
          "575a5c8b62a2ea18b0e62689",
          "575a5c8b62a2ea18b0e6268a",
          "575a5c8b62a2ea18b0e6268b"
        ],
        level : '20000'
      };

      $http.post('/api/gmat/post-question-pack', data).then(function (response){
        console.log('insert pack oke lah!');
        console.log(response);
        $state.go("main");
      })
    };

  })
