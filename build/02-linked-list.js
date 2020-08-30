"use strict";
/*
    linked list is a data structure where one element is a link to another
*/
var LinkedList = /** @class */ (function () {
    function LinkedList(a, b) {
        _this = _super.call(this, a, b) || this;
    }
    LinkedList.prototype.createList = function () {
        var List = {
            "first": this.a,
            "second": this.b
        };
        return List;
    };
    return LinkedList;
}());
var targetList = new LinkedList(3, 2);
