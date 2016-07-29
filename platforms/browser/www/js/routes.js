angular.module('MySite')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'SiteController',
      title: 'Lisa Hobbs'
    })

    .when('/about', {
      templateUrl: 'templates/about.html',
      title: 'A Little About Me'
    })

    .when('/projects', {
      templateUrl: 'templates/projects.html',
      controller: 'ProjectsIndexController',
      controllerAs: 'indexController',
      title: 'Things I\'ve Made'
    })
    
    .when('/projects/:title', {
      templateUrl: 'templates/project.html',
      controller: 'ProjectsShowController',
      controllerAs: 'showController',
      title: 'Things I\'ve Made'
    })

    .when('/contact', {
      templateUrl: 'templates/contact.html',
      title: 'Say Hello'
    })

    .when('/resume', {
      'templateUrl': 'templates/resume.html',
      title: 'What I\'ve Done'
    })
    
    
    .otherwise({redirectTo: '/'});
}) ;
  
