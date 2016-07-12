app.directive('minMax', function () {
    return {
        require: 'ngModel',
        link: function ($scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                $scope.min = (viewValue && viewValue >= 3 ? 'valid' : undefined);
                $scope.max = (viewValue && viewValue <= 20 ? 'valid' : undefined);

                if ($scope.min && $scope.max) {
                    ctrl.$setValidity('minmax', $scope.min);
                    return viewValue;
                } else {
                    ctrl.$setValidity('minmax', !$scope.min);

                    return undefined;
                }
            });
        }

    };
});
