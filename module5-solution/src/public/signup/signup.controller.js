(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var signupCtrl = this;
  var service = SignupService;
  console.log("Controller called!");

  signupCtrl.firstName = "";
  signupCtrl.lastName = "";
  signupCtrl.emailAddress = "";
  signupCtrl.phoneNumber = "";
  signupCtrl.favoriteDish = "";

  signupCtrl.message = "";

  signupCtrl.request = [];
  signupCtrl.buildRequest = function() {
    signupCtrl.request.push(signupCtrl.firstName);
    signupCtrl.request.push(signupCtrl.lastName);
    signupCtrl.request.push(signupCtrl.emailAddress);
    signupCtrl.request.push(signupCtrl.phoneNumber);
    signupCtrl.request.push(signupCtrl.favoriteDish);
    return signupCtrl.request;
  }

  signupCtrl.submit = function () {
    var promise = service.getMenuItem(signupCtrl.favoriteDish);
    promise.then(function() {
      console.log("message: ", service.message);
      signupCtrl.message = service.message;
    })
    signupCtrl.buildRequest();
    console.log("request array: ", signupCtrl.request);
    var request = service.saveSignupRequest(signupCtrl.request);
    console.log("request: ", request);
    return true;
  }
}

})();
