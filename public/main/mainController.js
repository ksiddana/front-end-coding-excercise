angular.module('truStar.main', ['MainServices'])

.controller('MainController', ['$scope', 'MainFactory', 
  function($scope, MainFactory) {
    
    $scope.loadData = function() {
      MainFactory.getAllData().then(function(data){
        $scope.fakeData = data;
      });
    }

  // Setup up initial values for selecting reports
  $scope.selectedIndex = null;
  $scope.selectedData = null;

  // define a function that takes in the index of the cell that is selected 
  // in the ng-repeat.
  $scope.selectData = function (data, index) {
    $scope.selectedIndex = index;
    $scope.selectedData = data;
  };

  // Custom Filter for filtering reports based on title
  $scope.titleFilter = function(report) {
    if ($scope.search) {
      return report.title.indexOf($scope.search) !== -1
    }
    return true;
  }

  // Load the data without hiting the Refresh Button
  $scope.loadData();

}])