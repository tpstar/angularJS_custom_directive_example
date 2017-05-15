var app = angular.module('app', []);

app.directive('exampleDirective', function() {
   return {

       template: `
         <div class="panel panel-primary">
             <div ng-transclude></div>
             Value through @: <input type="text" ng-model="valThroughAt">
             <br></br>

             Value through =: <input type="text" ng-model="valThroughEquals">
             <br></br>

         </div>
       `,

        link: function(scope) {
           scope.$watch('valThroughAt', function(newValue, oldValue) {
           scope.$parent.outerVal = scope.valThroughAt;
         });
       },

       transclude: true,

       scope: {
         valThroughEquals: '=',
         valThroughAt: "@"
       },

   }
});
