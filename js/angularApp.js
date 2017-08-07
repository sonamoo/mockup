/**
 * Created by seholim on 8/1/17.
 */

console.log("angular app is connected");

var prototypeApp = angular.module('prototypeApp',[]);

prototypeApp.controller('myPortfolioController',
    function myPortfolioController ($scope, $timeout) {

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

prototypeApp.controller('mainController',
    function mainController ($scope, $timeout) {

        var messageArray = [];
        messageArray[0] = "Welcome to Investar!";
        messageArray[1] = "We are choosing customized news, articles and messages that you will find useful! ";
        messageArray[2] = "Read, Learn, and Connect with other Investors! ";

        $scope.message = messageArray[0];
        $scope.showMessage = true;

        $scope.hideSocialFeed = true;
        $timeout( function() {
            $scope.message = messageArray[1];

        }, 2000);

        $timeout( function() {
            $scope.message = messageArray[2];
        }, 5000);

        $timeout( function() {
            $scope.showMessage = false;
            $scope.hideSocialFeed = false;
        }, 8000);

    });

prototypeApp.controller('searchController',
    function searchController ($scope, $timeout) {

        $scope.names = names;
        $scope.articles = articles;

        console.log($scope.articles);

        console.log($scope.names[2]);
        $scope.search = "";
        var initializing = true;

        $scope.setQuery = function(query) {
            $scope.query = query;
            $scope.focus = false;
        };


    });

prototypeApp.filter('searchNames', function() {
    return searchNames;
});

prototypeApp.filter('searchArticles', function() {
   return searchArticles;
});



function searchNames(arr, query) {
    if (!query) {
        return arr;
    }

    var results = [];
    query = query.toLowerCase();

    angular.forEach(arr, function(item) {
        if (item.toLowerCase().indexOf(query) !== -1) {
            console.log(item);
            results.push(item);
        }
    });


    return results;
}


function searchArticles(arr, query) {
    if (!query) {
        return arr;
    }

    var results = [];
    query = query.toLowerCase();

    angular.forEach(arr, function(item) {
        if (item["company"].toLowerCase().indexOf(query) !== -1) {
            console.log(item);
            results.push(item);
        }
    });

    return results;
}