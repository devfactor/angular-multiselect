angular.module('app', ['ui.multiselect'])
  .controller('appCtrl', ['$scope', function ($scope) {
    $scope.cars = [{
        id: 1,
        name: 'Audi'
    }, {
        id: 2,
        name: 'BMW'
    }, {
        id: 3,
        name: 'Mercedes'
    }, {
        id: 4,
        name: 'Citroen'
    }, {
        id: 5,
        name: 'Ambassador'
    }, {
        id: 6,
        name: 'Yugo'
    }, {
        id: 7,
        name: 'Mazda'
    }, {
        id: 8,
        name: 'Ford'
    }, {
        id: 8,
        name: 'GM'
    }, {
        id: 9,
        name: 'Suzuki'
    }, {
        id: 10,
        name: 'Saab'
    }, {
        id: 11,
        name: 'Honda'
    }
    ];
    $scope.selectedCar = [];

    // added method selectedMessage for ms-selected-function
    $scope.selectedMessage = function () {
      // change default message: ms-selected ="There are {{selectedCar.length}} car(s) selected"
      var message = '';
      if ($scope.selectedCar.length > 0 && $scope.selectedCar.length <= 3) {
        angular.forEach($scope.selectedCar, function (car) {
          // the variable 'car' has the value in the 'name' field
          message += car + ",";
        });
      } else {
        message = $scope.selectedCar.length + ' selected ';
      }
      return message.substring(0, message.length - 1);;
    }

    $scope.fruits = [{
      id: 1,
      name: 'Apple'
    }, {
      id: 2,
      name: 'Orange'
    }, {
      id: 3,
      name: 'Banana'
    }];
    $scope.selectedFruit = null;
    $scope.filterRegex = /^([a-zA-Z])([a-zA-Z0-9]*)/;
}]);
