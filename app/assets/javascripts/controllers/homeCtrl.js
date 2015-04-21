angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends){
    $scope.title = "Home";
    $scope.friends = Friends.get();
    $scope.items = ['home', "profile", "message"];
    $scope.selectedValue = 'home';

    $scope.save = function(){
      // alert(JSON.stringify($scope.friends));
    }; 
  }])