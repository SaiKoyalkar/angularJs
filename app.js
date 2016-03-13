var app= angular.module("myApp",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){

	// For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "file:///C:/Users/Sudarshan/Desktop/AngularJS/views/about.html"
    })

    .state('home', {
      url: "/home",
      templateUrl: "file:///C:/Users/Sudarshan/Desktop/AngularJS/views/home.html"
    })

});
app.config(function(){


});

app.run(function(){


});

app.run(function(){


});
	