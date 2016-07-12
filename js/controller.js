app.controller("GetValues", ['$scope', 'emicalservice', '$http', '$location', function ($scope, emicalservice, $http, $location) {
    $scope.formSubmit = function (amount, tenure) {
        $scope.$emit = emicalservice.calculate(amount, tenure);
        $location.path('/output');
    }
}]);

app.controller('getOutput', ['$scope', 'emicalservice', '$http', '$location', function ($scope, emicalservice, $http, $location) {
    var output = emicalservice.getOutput();
    if (!output) {
        $location.path('/');
    }

    $scope.outputVal = {
        message: output
    };

}]);
