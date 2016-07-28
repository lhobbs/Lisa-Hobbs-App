angular.module('MySite').factory('Category', ['$http', function CategoryFactory($http) {
  var categories;
  
  return {
    all: function() {      
      $http.get('data/categories.json').success(function(data){
        return data;
    });
    }
  };
}]);