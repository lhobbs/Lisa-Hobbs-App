angular.module('MySite')
.controller('ProjectsIndexController', function($http) {
  var site = this;
    site.projects = [];
    $http.get('data/projects.json').success(function(data){
        site.projects = data;
    });

});