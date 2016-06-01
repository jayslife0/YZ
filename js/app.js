/**
 * Created by xinzhang on 16/3/22.
 */
var QY = {};
QY.CONTROLLERS = angular.module('QY.controllers', ['QY.services']);
QY.SERVICES = angular.module('QY.services', ['QY.backend', 'QY.config']);
QY.BACKEND = angular.module('QY.backend', []);


angular.module('QY', ['ui.router', 'QY.controllers', 'QY.config'])
    .run(["$rootScope", '$state', function ($rootScope, $state) {

    }])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('mine', {
                url: '/mine',
                //controller: 'navigationCtrl',
                templateUrl: 'html/mine.html'
            })




        ;
        $urlRouterProvider.otherwise('mine');
        //$urlRouterProvider.otherwise('clockIn');

    }]);

