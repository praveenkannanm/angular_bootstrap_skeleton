angular
  .module('app')
  .controller('profileCtrl', ['$scope', 'Friends', function($scope, Friends){
    $scope.title = "Profile";
    $scope.items = Friends.get();
    
  }])