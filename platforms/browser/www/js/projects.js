(function() {
	var projects = angular.module('project-directives', []);

	projects.directive('projectDescriptionLong', function() {
		return {
			restrict: 'E',
			templateUrl: 'project.html'
		};
	});
})