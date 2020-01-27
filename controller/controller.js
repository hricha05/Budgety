var budgetController = (function () {

  var addItem = function () {
    //Some code
  }

  var calculateBudget = function () {
    //Some code
  }

  var calculateTotal = function () {
    //Some code
  }

  var getBudget = function () {
    //Some code
  }

  return {
    expense: addItem(),
    income: addItem()
  }

})();

var UIContorller = (function () {
  
  var getInput = function () {
    //Some code
  }

  var addListItem = function () {
    //Some code
  }

  return {
    getDOMstrings: {
      getInput,
      addListItem
    }
  }

})();

var controller = (function (budgetCtrl, UICtrl) {
  
  //some code

})(budgetController, UIContorller);