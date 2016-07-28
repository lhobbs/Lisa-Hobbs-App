angular.module("MySite")
.directive("projectCard", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/project-card.html'
	};
});