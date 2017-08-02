/**
 * Created by seholim on 8/1/17.
 */

console.log("angular app is connected");

var prototypeApp = angular.module('prototypeApp',[]);
console.log(prototypeApp);

prototypeApp.controller('mainController',
    function mainController ($scope, $timeout) {
        console.log("inside of the controller");

        var messageArray = [];
        messageArray[0] = "Investar is adding industry leaders that support your ESG preference ...";
        messageArray[1] = "Investar is running Wealth Forecasting Engine ... ";

        $scope.message = messageArray[1];
        $scope.showMessage = true;

        $timeout( function() {
            $scope.message = messageArray[0];

        }, 4000);

        $timeout( function() {
            $scope.showMessage = false;
            ChartInit();
        }, 8000);



        console.log($scope.app);
});
