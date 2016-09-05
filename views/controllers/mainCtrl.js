angular.module('mainCtrl',[])

    .controller('startCtrl', function($scope, sliderData){
        $scope.slides = sliderData;
        $scope.map = {
            center: {
                latitude: 52.507629,
                longitude: 13.1459628
            },
            zoom: 8
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 52.507629,
                longitude: 13.1459628
            },
            options: { draggable: false }
        };
    })

    .controller('profileCtrl', function($scope, $state, userInformation){
      $scope.user = {
            apperal : 1,
            name : "loading...",
            address: "loading...",
            zip: "loading...",
            phone: "loading...",
            email: "loading...",
            fax: "loading...",
            qualification: [],
            about: "loading...",
            services: []
        };
        $scope.$on('$viewContentLoaded', function()
        {
            userInformation.getInformation().success(function(response){
                $scope.user = response;
                console.log($scope.user)
            });
        });
        $scope.config = {
            itemsPerPage: 1,
            fillLastPage: true
        }
    })

    .controller('editCtrl', function($scope, $state, userInformation){
        $scope.$on('$viewContentLoaded', function()
        {
            userInformation.getInformation().success(function(response){
                $scope.userData = response;
                console.log($scope.userData)
            });

        });

        $scope.sendUserData = function(){
            console.log('we send: ' + JSON.stringify($scope.userData));
            userInformation.sendInformation($scope.userData).success(function(response){
                console.log(response)
            });
        };

        $scope.deleteQual = function(item){

            $scope.userData.qualification.splice(item, 1);
        };


        $scope.qualification = '';
        $scope.qualificationArr = [];

        $scope.addQualification = function(keyEvent){
            if(keyEvent.which === 13 && $scope.qualification.length>0 )
            {
                $scope.userData.qualification.push({
                    name: $scope.qualification,
                });
                $scope.qualification = '';
            }
        };


        $scope.servicesArr = [];

        $scope.Types = ['Maker','Consultation','Type'];



        $scope.addService = function(){
            $scope.userData.services.push({
                name:'',
                type:'',
                description: ''
            });

        };
        $scope.deleteService = function(item) {

            $scope.userData.services.splice(item, 1);
        };
        });