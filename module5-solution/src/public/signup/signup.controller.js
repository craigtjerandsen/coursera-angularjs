(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var signupCtrl = this;
  var service = SignupService;

  signupCtrl.firstName = "";
  signupCtrl.lastName = "";
  signupCtrl.emailAddress = "";
  signupCtrl.phoneNumber = "";
  signupCtrl.favoriteDish = "";

  signupCtrl.message = "";

  signupCtrl.request = {};

  signupCtrl.buildRequest = function() {
    signupCtrl.request = {
      firstName : signupCtrl.firstName,
      lastName : signupCtrl.lastName,
      emailAddress : signupCtrl.emailAddress,
      phoneNumber : signupCtrl.phoneNumber,
      favoriteDish : signupCtrl.favoriteDish
    }
  }

  signupCtrl.submit = function () {
    signupCtrl.buildRequest();
    var promise = service.submitRequest(signupCtrl.request);
    promise.then(function() {
      signupCtrl.message = service.message;
    });
    return true;
  }
}

})();
