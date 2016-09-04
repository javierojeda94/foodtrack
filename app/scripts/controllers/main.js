'use strict';

/**
 * @ngdoc function
 * @name foodtrackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodtrackApp
 */
angular.module('foodtrackApp').controller('MainCtrl', ['$scope',function ($scope) {
    $scope.user = '';
    $scope.password = '';
    $scope.submit = function(){
        if($scope.user !== 'foodtrack' || $scope.password !== 'foodtruck'){
            alert('Accesos incorrectos');
        }else{
            $('#main').fadeOut('slow');
        }
    };
    $scope.allFoods = {
        model: null,
        options: [
            'Burritos','Frappes','Pastas'
        ]
    };
    $scope.foods = [
        'Hamburguesas', 'Pizzas', 'Tacos'
    ]
    $scope.addFood = function(){
        $scope.foods.push($scope.allFoods.model);
        $scope.allFoods.options.splice($scope.allFoods.options.indexOf($scope.allFoods.model), 1);
    };
    $('li').click(function(e){
        var li = $(e.relatedTarget);
        console.log(li);
        var section = li.data('toggle');
        console.log(section);
        $('div.main-option').fadeOut('slow');
        $(section).fadeIn('slow');

    });
}]);
