(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {

  var itemsCtrl = this;

  console.log("ItemsController is instantiated");

  itemsCtrl.items = items;
}

})();
