(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService)
.constant('ApiPath', 'https://craigtjerandsen-module5.herokuapp.com');

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var signupService = this;
  var savedRequest = {};

  signupService.message = "";

  // Get requested favorite menu item
  signupService.submitRequest = function(request) {
    var shortName = request.favoriteDish;
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
      savedRequest = request;
      savedRequest.favoriteDish = response.data;
      signupService.message = "Your information has been saved";
      return response.data;
    })
    .catch(function (error) {
      signupService.message = "No such menu number exists";
      console.log("Error when retrieving menu item.", error);
    });
  };

  // Retrieve myinfo
  signupService.getMyinfo = function() {
    return savedRequest;
  }
}

})();
