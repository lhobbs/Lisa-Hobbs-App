angular.module('MySite')
.factory('Project', ['$http', function ProjectFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: "/projects"});
    },
    find: function(id){
      return $http({method:'GET', url: '/projects/' + id});
    }
  };
}]);