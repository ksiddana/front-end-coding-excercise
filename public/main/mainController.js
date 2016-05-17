angular.module('truStar.main', ['MainServices'])

.controller('MainController', ['$scope', 'MainFactory', 
  function($scope, MainFactory) {
    
    $scope.loadData = function() {
      MainFactory.getAllData().then(function(data){
        $scope.fakeData = data;
      });
    }

  $scope.selectedIndex = null;
  $scope.selectedData = 'No Report Selected';

  $scope.selectData = function (data, index) {
    $scope.selectedIndex = index;
    $scope.selectedData = data;
  };

  // Load the data without hiting the Refresh Button
  $scope.loadData();

}])