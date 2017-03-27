angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPopup) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

         
        // Form data for the registration modal
        $scope.registrationData = {};

        //Form data for login
        $scope.loginData = {};

        // Create the registration modal that we will use later
        $ionicModal.fromTemplateUrl('templates/registration.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the registration modal to close it
        $scope.closeRegistration = function () {
            $scope.modal.hide();
        };

        // Open the registration modal
        $scope.registration = function () {
            $scope.modal.show();
        };

        // Perform the registration action when the user submits the registration form
        $scope.doRegistration = function () {
            console.log('Doing registration', $scope.registrationData);

        // Perform the login action when the user submits 
            $scope.doLogin = function () {
                console.log('Logging in', $scope.loginData);
            }

            // Simulate a registration delay. Remove this and replace with your registration
            // code if using a registration system
            $timeout(function () {
                $scope.closeRegistration();
            }, 1000);
        };
 
    });





