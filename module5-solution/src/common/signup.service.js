(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService)
.constant('ApiPath', 'https://craigtjerandsen-module5.herokuapp.com');

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var signupService = this;
  var request = [];

  // Properties
  console.log("service called!");
  signupService.firstName = "";
  signupService.lastName = "";
  signupService.phoneNumber = "";
  signupService.emailAddress = "";
  signupService.favoriteItem = "";

  signupService.message = "";

  // Save
  signupService.saveSignupRequest = function(signupRequest) {
    console.log("service request: ", signupRequest);
    request = signupRequest;
    signupService.firstName = signupRequest[0];
    signupService.lastName = signupRequest[1];
    signupService.phoneNumber = signupRequest[2];
    signupService.emailAddress = signupRequest[3];
    signupService.favoriteItem = signupRequest[4];
    console.log("Saved request: ", request);
    return true;
  }

  // Check whether a particular menu item short name exists
  signupService.checkItemValid = function(shortName) {
    console.log("service checking shortName", shortName);
    var menuItem = signupService.getMenuItem(shortName);
    console.log("check item valid: ", menuItem);
    return menuItem;
    if (menuItem === "Error") {
      return false;
    }
    return true;
  }

  // Get requested favorite menu item
  signupService.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
      console.log("received server response: ", response.data);
      signupService.message = "Your information has been saved";
      return response.data;
    })
    .catch(function (error) {
      signupService.message = "No such menu number exists";
      console.log("Something went terribly wrong.", error);
    });
  };

  // Retrieve myinfo
  signupService.getMyinfo = function() {
    return request;
  }
}

})();
