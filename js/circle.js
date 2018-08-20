(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * this.radius * this.radius;
            return area;
            // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // // TODO: complete this method.
            // var rounded = Math.round(area);
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is:  " + Math.round(this.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is:  " + this.getArea());

            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete values
            // console.log("Area of a circle with radius: " + this.radius + ", is:  " +  );

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();