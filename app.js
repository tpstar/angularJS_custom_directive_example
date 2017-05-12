var app = angular.module('exampleApp', );

app.controller('mainController', function($scope) {

    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }

});

app.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personName: "@",
           personAddress: "@"
       }
   }
});
