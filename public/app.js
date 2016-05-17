angular.module("truStar", ['ui.router',
  'truStar.main'
])

.config(['$stateProvider','$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('/main', {
      url: '/main',
      templateUrl: '/main/main.html',
      controller: 'MainController'
    })
    
}])
