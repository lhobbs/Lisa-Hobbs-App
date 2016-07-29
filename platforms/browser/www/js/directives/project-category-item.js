angular.module("MySite")
.directive("projectCategoryItem", function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/project-category-item.html',
		scope: {
			category: "="
		},
		require: "^projectCategorySelect",
		link: function(scope, element, attrs, projectCategorySelectCtrl) {
			scope.makeActive = function() {
				projectCategorySelectCtrl.setActiveCategory(scope.category);
			}
			scope.categoryActive = function() {
				return projectCategorySelectCtrl.getActiveCategory() == scope.category.name;
			}
		}
	};
});