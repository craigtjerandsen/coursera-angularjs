(function() {
'use-strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = function() {
    var highlow = checkHighLow($scope.dishes);
    $scope.messageValue = highlow;
  };
}

  function checkHighLow(string) {
    if(string == "") {
      return "Please enter data first.";
    }
    var array = string.split(',');
    var length = array.length;
    if (length <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  };
})();
