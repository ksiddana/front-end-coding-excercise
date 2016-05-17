angular.module('MainServices', [])

.factory('MainFactory', ['$http', function($http){

  var truStarData = {};

  truStarData.getAllData = function() {

    return $http({
      method: 'GET',
      url: '/reports'
    })
    .then(function(response) {
      console.log(response);
      return response.data;   
    })
  }

  return truStarData;

}]);