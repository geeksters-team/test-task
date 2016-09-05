angular.module('App', ['mainCtrl', 'ui.router', 'uiGmapgoogle-maps', 'angular-carousel', 'angular-table'])

    .run([ '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])

    .config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        $stateProvider

            .state('startScreen', {
                url: '/start',
                templateUrl: 'start.html',
                controller: 'startCtrl',
                data:{title:'Start'}

            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'profile.html',
                controller: 'profileCtrl',
                data:{title:'Profile'}
            })

            .state('profile-edit', {
                url: '/profile-edit',
                templateUrl: 'profile-edit.html',
                controller: 'editCtrl',
                data:{title:'Edit'}
            });

        $urlRouterProvider.otherwise('/start');

        uiGmapGoogleMapApiProvider.configure({
            v: '3.20'
        });

    })

    .factory("userInformation",function($http){

        var data = {};

        data.getInformation = function(){
            return $http({
                method: "GET",
                url: "/users/user"
            });
        };
        data.sendInformation = function(userData){
            return $http({
                method: "PUT",
                url: "/users/user",
                data: userData
            });
        };
        return data;
    })

    .factory("sliderData",function(){

        var slides = [
            {   image: 'http://puzzleit.ru/files/puzzles/143/142994/_thumb.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid dolore eligendi est excepturi inventore ipsa',
                title: '1 slide',
                buttonText: '1 button'
            },
            {   image: 'http://www.factroom.ru/facts/wp-content/uploads/2012/03/pri-400x400.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid dolore eligendi est excepturi inventore ipsa',
                title: '2 slide',
                buttonText: '2 button'
            },
            {   image: 'http://puzzleit.ru/files/puzzles/143/142994/_thumb.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid dolore eligendi est excepturi inventore ipsa',
                title: '3 slide',
                buttonText: '3 button'
            },
            {   image: 'https://www.proza.ru/pics/2009/03/30/123.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid dolore eligendi est excepturi inventore ipsa',
                title: '4 slide',
                buttonText: '4 button'
            }
        ];


        return slides;

    });
