/**
 * Created by seholim on 8/1/17.
 */

console.log("angular app is connected");

var prototypeApp = angular.module('prototypeApp',[]);
console.log(prototypeApp);

prototypeApp.controller('mainController',
    function mainController ($scope) {
        console.log("inside of the controller");
        $scope.app = 'Angular Test';
        console.log($scope.app);

});
