// IFEE creates a new scope, that cannot be accessed from the outside of this function

// Budget Controller
var budgetController = (function() {

    // Expense
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Income
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // ID = last ID + 1
            // create new id
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our datastructure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    };

})();

var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
};

// UI Controller
var uiController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
      getInput : function () {

          return {
              type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp for income and expense respectively
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

        var input, newItem;
        // 1. GET THE FILLED INPUT DATA

        input = uiCtrl.getInput();

        // 2. ADD THE ITEM TO THE BUDGET CONTROLLER

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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