(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    template: '{{ menuItem.name }}, {{ menuItem.short_name }}, {{ menuItem.description }}',
    scope: {
      menuItem: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;
  var service = MenuSearchService;

  narrowCtrl.foundItems = service.getItems();

  narrowCtrl.found = function (searchTerm) {
    var found = service.getMatchedMenuItems(searchTerm);
    return found;
  };

  narrowCtrl.removeItem = function (itemIndex) {
    service.removeItem(itemIndex);
  };

  narrowCtrl.empty = function () {
    return service.empty();
  };

  narrowCtrl.clearItems = function () {
    return service.clearItems();
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      })
      .then(function (result) {
        var items = result.data.menu_items;
        service.clearItems();
        for (var i = 0; i < items.length; i++) {
          var description = items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(items[i]);
        }
      }
      return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

  service.empty = function () {
    return foundItems.length == 0;
  };

  service.getItems = function () {
    return foundItems;
  };

  service.clearItems = function () {
    for (var i = foundItems.length; i--;) {
       service.removeItem(i);
     }
  };
}

})();
