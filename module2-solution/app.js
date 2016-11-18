(function () {
  'use-strict';

angular.module('ShoppingListCheckOff', [])
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .controller('ToBuyController', ToBuyController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.getBuyItems = function() {
      var buyListItems = ShoppingListCheckOffService.getBuyItems();
      return buyListItems;
    }

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuy.empty = function () {
      var empty = toBuy.getBuyItems();
      return empty == 0;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.getBoughtItems = function() {
      var boughtListItems = ShoppingListCheckOffService.getBoughtItems();
      return boughtListItems;
    }

    bought.empty = function () {
      var empty = bought.getBoughtItems();
      return empty == 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var shoppingList = [
      {
        name: "milk",
        quantity: "2 quarts"
      },
      {
        name: "donuts",
        quantity: "1 box"
      },
      {
        name: "cookies",
        quantity: "3 packages"
      },
      {
        name: "chocolate",
        quantity: "5 bars"
      },
      {
        name: "ice cream",
        quantity: "1 carton"
      }
    ];

    var boughtList = [];

    service.buyItems = shoppingList;
    service.boughtItems = boughtList;

    service.getBuyItems = function() {
      return service.buyItems;
    };

    service.getBoughtItems = function() {
      return service.boughtItems;
    };

    service.buyItem = function (itemIndex) {
      var item = service.buyItems[itemIndex];
      service.buyItems.splice(itemIndex, 1);
      service.addItem(item);
    };

    service.addItem = function (toAdd) {
      service.boughtItems.push(toAdd);
    };
  }

})();
