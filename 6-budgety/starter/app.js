// IFEE creates a new scope, that cannot be accessed from the outside of this function

// Module pattern returns an OBJECT containing all of the functions that we want to be public. i.e. those that we want to be accessable from outside the function
var budgetController = (function() {
    var x = 23;

    var add = function (a) {
        return x + a;
    }

    // this object gets assigned to the budget. (the closure below)
    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();

var uiController = (function () {
    // TODO
})();

var controller = (function (budgetCtrl, uiCtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            return (z);
        }
    }

})(budgetController, uiController);