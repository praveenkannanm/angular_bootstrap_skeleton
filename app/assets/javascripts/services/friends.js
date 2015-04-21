angular
  .module('app')
  .factory('Friends', ['$http', function($http){
    return {
       get: function(){
          return [ 
  {"name": "saran", "age": 20, "isSpecial": true }, 
  {"name": "sk", "age": 25, "isSpecial": false}
];
       }
    };
  }])