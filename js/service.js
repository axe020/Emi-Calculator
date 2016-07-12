app.service('emicalservice', function () {

    var output = "";

    var calculate = function (amount, tenure) {
        if (!amount || !tenure) {
            return '';
        } else {
            var r = 9.9 / 12 / 100;

            tenure = tenure * 12;

            output = (amount * r * (Math.pow((1 + r), tenure) / (Math.pow((1 + r), tenure) - 1))).toFixed(2);
        }

    }

    var getOutput = function () {
        return output;
    };



    return {
        calculate: calculate,
        getOutput: getOutput
    };
});
