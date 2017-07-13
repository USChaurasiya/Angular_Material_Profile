var myApp = angular.module('fundooApp', ['ui.router','sticky','ngMaterial','ngAria', 'ngAnimate'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("profile",{
    url:"/profile",
    templateUrl:"template/newProfile.html",
    controller:"profileCtrl",
  });
  $urlRouterProvider.otherwise('/profile');

});
