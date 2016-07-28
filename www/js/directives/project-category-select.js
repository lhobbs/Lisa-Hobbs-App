angular.module("MySite")
.directive("projectCategorySelect", ['Category', '$http', function(Category, $http) {
	return {
		replace: true,
		restrict: 'E',
		scope: {
			activeCategory: "="
		},
		templateUrl: 'templates/directives/project-category-select.html',
		link: function(scope, element, attrs) {
			$http.get('data/categories.json').success(function(data){
		        scope.categories = data;
		    });
		},
		controller: function($scope) {
			this.setActiveCategory = function(category) {
				$scope.activeCategory = category.name;
			}
			this.getActiveCategory = function(){
		        return $scope.activeCategory
		    }
		},
		controllerAs: 'projectCategorySelectCtrl'
	};
}]);