(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController)
.constant('ApiPath', 'https://craigtjerandsen-module5.herokuapp.com');

MyinfoController.$inject = ['SignupService', 'myinfo', 'ApiPath'];
function MyinfoController(SignupService, myinfo, ApiPath) {
  var myinfoCtrl = this;
  var service = SignupService;

  myinfoCtrl.message = "";

  myinfoCtrl.myinfo = myinfo;
  myinfoCtrl.ApiPath = ApiPath;

  var myinfo = service.getMyinfo();
  if (myinfo.length > 0) {
    myinfoCtrl.message = "Here it is!";
  }
  else {
    myinfoCtrl.message = "Not Signed Up Yet. Sign up Now!";
  }
}
})();
