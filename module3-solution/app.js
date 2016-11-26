(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;
  var service = MenuSearchService;

  var found = [];

  narrowCtrl.narrow = function (searchTerm) {

      narrowCtrl.menuItems = service.getMatchedMenuItems(searchTerm);
      narrowCtrl.menuItems.then(function (response) {
      narrowCtrl.menuItems = response.data.menu_items;

        for (var i = 0; i < narrowCtrl.menuItems.length; i++) {
          var description = narrowCtrl. menuItems[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            found.push(narrowCtrl.menuItems[i]);
          }
        }
      console.log("found: ", found);
      narrowCtrl.menuItems = found;
      return found;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  narrowCtrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex, narrowCtrl.menuItems);
  };

  narrowCtrl.empty = function () {
    return found.length === 0;
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var menuItems = [];
  service.getMatchedMenuItems = function (searchTerm) {

    var items = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
    menuItems=items;
    return items;
  };

  service.removeItem = function (itemIndex, found) {
    found.splice(itemIndex, 1);
  };
}

})();
