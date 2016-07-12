var app = angular.module('emiApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "templete/home.html"
    }).state('output', {
        url: "/output",
        templateUrl: "templete/output.html",
        controller: 'getOutput'
    });

    $urlRouterProvider.otherwise('/');
});
