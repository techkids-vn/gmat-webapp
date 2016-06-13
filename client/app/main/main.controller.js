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

    $scope.onDeleteQuestion = function(){
        var question = {
                "_id" : "575a5c9662a2ea18b0e626af",
                "type" : "Q",
                "sub_type" : "ARTH",
                "stimulus" : "If an object travels at five feet per second, how many feet does it travel in one hour?",
                "stem" : "",
                "answer_choices" : [
                    {
                        "index" : 0,
                        "choice" : ". 30",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 1,
                        "choice" : "300",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 2,
                        "choice" : "720",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 3,
                        "choice" : "1800",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 4,
                        "choice" : "18000",
                        "explanation" : "Đáp án đúng",
                        "note" : ""
                    }
                ],
                "right_answer" : 4
            };
        $http.post("/api/gmat/delete-question",question).then(function(response){
            console.log("delete question");
            question.hide = true;
        })
    };
    $scope.onDeleteQuestionPack = function(){
        var questionPack = {
        _id: "575a5c8c62a2ea18b0e6268c",
        available_time: "2016-06-04",
        level: "1",
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
            ]
        }
        $http.post("/api/gmat/delete-question-pack",questionPack).then(function(response){
            console.log("delete pack");
            // questionPack.hide = true;
        })
    };

    $scope.onEditQuestion = function(){
        var question = {
                "_id" : "575a5c9662a2ea18b0e626af",
                "type" : "Q",
                "sub_type" : "ARTH",
                "stimulus" : "If an object travels at five feet per second, how many feet does it travel in one hour?",
                "stem" : "",
                "answer_choices" : [
                    {
                        "index" : 0,
                        "choice" : ". 30",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 1,
                        "choice" : "300",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 2,
                        "choice" : "720",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 3,
                        "choice" : "1800",
                        "explanation" : "Đáp án sai",
                        "note" : ""
                    },
                    {
                        "index" : 4,
                        "choice" : "18000",
                        "explanation" : "Đáp án đúng",
                        "note" : ""
                    }
                ],
                "right_answer" : 4
        };
        $http.post("/api/gmat/edit-question",question).then(function(response){
            console.log("delete pack");
            console.log(response);
        })
    };
})
