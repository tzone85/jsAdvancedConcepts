// IFEE creates a new scope, that cannot be accessed from the outside of this function

// Budget Controller
var budgetController = (function() {

})();

// UI Controller
var uiController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
      getInput : function () {

          return {
              type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value
          };
      },

        // expose the private DOMStrings to the outside of UI Controller.

        getDOMstrings : function () {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP Controller
var controller = (function (budgetCtrl, uiCtrl) {

    var setupEventListeners = function(){

        var DOM = uiCtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // global event listener when enter is pressed
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){

        // TODO
        // 1. GET THE FILLED INPUT DATA

        var input = uiCtrl.getInput();
        console.log(input);

        // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
        // 3. ADD THE ITEM TO THE UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            setupEventListeners();
        }
    }

})(budgetController, uiController);

controller.init();