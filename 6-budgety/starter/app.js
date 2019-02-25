// IFEE creates a new scope, that cannot be accessed from the outside of this function

// Budget Controller
var budgetController = (function() {

})();

// UI Controller
var uiController = (function () {
    // TODO
})();

// GLOBAL APP Controller
var controller = (function (budgetCtrl, uiCtrl) {

    var ctrlAddItem = function(){

        // TODO
        // 1. GET THE FILLED INPUT DATA
        // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
        // 3. ADD THE ITEM TO THE UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // global event listener when enter is pressed
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, uiController);