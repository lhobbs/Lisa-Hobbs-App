angular.module('MySite')
.controller('ProjectsShowController', function($http, $routeParams) {
  var controller = this;
  // $http({method: 'GET', url: '/projects/' + $routeParams.id})
  // .success(function(data) {
  // 	controller.project = data;
  // })
  controller.projects = [];
    $http.get('data/projects.json').success(function(data){
        controller.projects = data;
        controller.project = controller.projects.filter(function( obj ) {
			  return obj.title == $routeParams.title;
			})[0];
    });

});