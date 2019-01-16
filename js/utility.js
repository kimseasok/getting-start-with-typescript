"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elmentId) {
    var inputElement = document.getElementById(elmentId);
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map