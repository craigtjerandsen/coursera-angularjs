(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {

  var service = this;
console.log("MenuDataService is instantiated");

  service.getAllCategories = function() {
    console.log("getAllCategories is called");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
    .then(function (result) {
      var categories = result.data;
      console.log("retrieved: ", result.data);
      return categories;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  service.getItemsForCategory = function() {
    console.log("getItemsForCategory is called");
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function (result) {
        var items = result.data.menu_items;
        // for (var i = 0; i < items.length; i++) {
        //   var description = items[i].description;
        //   if (description.toLowerCase().indexOf(searchTerm) !== -1) {
        //     items.push(items[i]);
        // }
        console.log("retrieved items: ", result.data.menu_items);
        return items;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

})();
