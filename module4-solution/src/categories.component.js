(function () {
'use strict';
console.log("categories.component is called");
angular.module('MenuApp')
.component('categoriesComponent', {
  templateUrl: 'src/templates/categories.template.html',
  //controller: 'CategoriesController',
  bindings: {
    items: '<'
  }
});

})();
