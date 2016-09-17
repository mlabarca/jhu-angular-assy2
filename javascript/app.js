(function () {
  'use strict'
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
    var toBuyCtrl = this; 
    toBuyCtrl.toBuyItems = ShoppingListCheckOffService.toBuyItems; 
  }
  AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughItems = ShoppingListCheckOffService.boughItems;
  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuyItems = [
      { name: "Cookies", quantity: 10 },
      { name: "DC Comics", quantity: 1 },
      { name: "Chocolate Milkshake", quantity: 1 },
      { name: "Art Brut Album", quantity: 1 },
      { name: "Couch", quantity: 1 },
    ];
    service.boughItems = [];

    service.buyItem = function(itemIndex){
      var boughtItem = service.toBuyItems.splice(itemIndex, 1);
      service.boughItems.push(boughtItem);
    }
  }
})();