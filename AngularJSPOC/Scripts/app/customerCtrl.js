/// <reference path="../angular.min.js" />

(function () {
    'use strict';

    //create angularjs controller
    var app = angular.module('app', []);//set and get the angular module
    app.controller('customerController', ['$scope', '$http', customerController]);

    //angularjs controller method
    function customerController($scope, $http) {

        //declare variable for mainain ajax load and entry or edit mode
        $scope.loading = true;
        $scope.addMode = false;

        //get all customer information
        $http.get('/api/Customer/').success(function (data) {
            $scope.customers = data;
            $scope.loading = false;
        }).error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });

        //by pressing toggleEdit button ng-click in html, this method will be hit
        $scope.toggleEdit = function () {
            this.customer.editMode = !this.customer.editMode;
        };

        //by pressing toggleAdd button ng-click in html, this method will be hit
        $scope.toggleAdd = function () {
            $scope.addMode = !$scope.addMode;
        };

        //Inser Customer
        $scope.add = function () {
            $scope.loading = true;
            $http.post('/api/Customer/', this.newcustomer).success(function (data) {
                alert("Added Successfully!!");
                $scope.addMode = false;
                $scope.customers.push(data);
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding Customer! " + data;
                $scope.loading = false;
            });
        };

        //Edit Customer
        $scope.save = function () {
            $scope.loading = true;
            var frien = this.customer;
            $http.put('/api/Customer/' + frien.Id, frien).success(function (data) {
                alert("Saved Successfully!!");
                frien.editMode = false;
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Saving customer! " + data;
                $scope.loading = false;
            });
        };

        $scope.paging = function (pId) {
            //alert(pId);
            $http.get('api/Customer/' + pId).success(function (data) {
                $scope.loading = true;
                $scope.customers = data;
                $scope.loading = false;
            }).error(function (data) {
                $scope.error = "An Error has occured while Paging customer! " + data;
                $scope.loading = false;
            });
        };

        function ReturnConfirm()
        {
            return confirm('Are you sure you want to delete');
        }

        //Delete Customer
        $scope.deletecustomer = function () {
            var Id = this.customer.Id;
            if (ReturnConfirm()) {
                $scope.loading = true;
                $http.delete('/api/Customer/' + Id).success(function (data) {
                    alert("Deleted Successfully!!");
                    $.each($scope.customers, function (i) {
                        if ($scope.customers[i].Id === Id) {
                            $scope.customers.splice(i, 1);
                            return false;
                        }
                    });
                    $scope.loading = false;
                }).error(function (data) {
                    $scope.error = "An Error has occured while Deleting Customer! " + data;
                    $scope.loading = false;
                });
            }
        };
    }
})();