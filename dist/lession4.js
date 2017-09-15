"use strict";
var isActive = false;
console.log(isActive);
var myName = 'vo khanh thuy';
var contentPage = "\n<div>Hello</div>\n<p>Xin chao " + myName + "</p>\n";
console.log(contentPage);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Gray"] = 3] = "Gray";
})(Colors || (Colors = {}));
console.log(Colors);
var myColor = Colors.Blue;
console.log(myColor);
//# sourceMappingURL=lession4.js.map