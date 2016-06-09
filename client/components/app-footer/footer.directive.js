'use strict';

angular.module('techkidsApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/app-footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
