(function () {
'use strict';

angular.module('MenuApp')
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
      var items = result.data;
      console.log("retrieved: ", result.data);
      return items;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // service.getItemsForCategory() = function(categoryShortName) {
  //   return $http({
  //       method: "GET",
  //       url: (ApiBasePath + "/categories.json")
  //     })
  //     .then(function (result) {
  //       var items = result.data.categories;
  //       for (var i = 0; i < items.length; i++) {
  //         var description = items[i].description;
  //         if (description.toLowerCase().indexOf(searchTerm) !== -1) {
  //           foundItems.push(items[i]);
  //       }
  //     }
  //     return foundItems;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
}

})();
