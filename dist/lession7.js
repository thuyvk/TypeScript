"use strict";
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
    console.log(colors);
};
displayColor("Green", "Blue", "Red");
displayColor("Green");
//# sourceMappingURL=lession7.js.map