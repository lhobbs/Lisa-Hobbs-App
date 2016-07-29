(function() {
  var app = angular.module('MySite', ['ngRoute']);

  app.controller('SiteController', ['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function(event, data) {
      $rootScope.pageTitle = data.$$route.title
    })

   $(function(){
        $('#navTitle').css('display', 'none');
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > 50 ) {
                        $('#navTitle').css('display', 'block');
                } else {
                        $('#navTitle').css('display', 'none');
                }
      });
      });
    
  }]);


})();