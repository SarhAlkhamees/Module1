(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.dishes = $scope.dishes;
      $scope.numOfDishes;
      $scope.message = "";
      $scope.messageType = "";
      $scope.checkIfTooMuch = function() {
        if(!$scope.dishes) {
          $scope.message = "Please enter data first";
        } else if (checkDishesLength($scope.dishes) <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      };

      function checkDishesLength(dishes) {
        var Dishes = dishes.split(",");
        angular.forEach(Dishes, function(value, key) {
          console.log("value: " + value);
          if(!value || value == " ") {
            console.log("Remove the value: " + value);
            Dishes.splice(key, 1);
          }
        });
        return Dishes.length;
      }
    }
})();
