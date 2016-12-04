(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  console.log("RoutesConfig is called");

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    // template: '<div>You are home!</div>'
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    //template: '<categoriesComponent items="items"></categoriesComponent>',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        console.log("Using routes.js to retrieve categories");
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    //url: '/items/{short_name}',
    url: '/items/{short_name}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log("short_name: ", $stateParams);
              return MenuDataService.getItemsForCategory($stateParams.short_name);
                // .then(function (items) {
                //   console.log("items for category: ", items);
                //   return items;
                // });
            }]
    }
  });
}

})();
