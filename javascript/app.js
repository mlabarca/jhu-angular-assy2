(function () {
  'use strict'
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

  ToBuyShoppingController.$inject = ['$scope'];
  function ToBuyShoppingController($scope) {
   
  }
  AlreadyBoughtShoppingController.$inject = ['$scope'];
  function AlreadyBoughtShoppingController($scope) {
   
  }
})();