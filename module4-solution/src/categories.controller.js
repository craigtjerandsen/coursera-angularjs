(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {

  var categoriesCtrl = this;

  console.log("CategoriesController is instantiated");

  categoriesCtrl.items = items;//MenuDataService.getAllCategories();

  // categoriesCtrl.$onInit = function () {
  //   MenuDataService.getAllCategories()
  //   .then(function(result) {
  //     categoriesCtrl.items = result;
  //   });
  // }

}

})();
