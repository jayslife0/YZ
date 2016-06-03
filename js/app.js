/**
 * Created by xinzhang on 16/3/22.
 */
var YZ = {};
YZ.CONTROLLERS = angular.module('YZ.controllers', ['YZ.services']);
YZ.SERVICES = angular.module('YZ.services', ['YZ.backend', 'YZ.config']);
YZ.BACKEND = angular.module('YZ.backend', []);


angular.module('YZ', ['ui.router', 'YZ.controllers', 'YZ.config'])
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

