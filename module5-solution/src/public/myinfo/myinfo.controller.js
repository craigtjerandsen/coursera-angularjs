(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignupService', 'myinfo'];
function MyinfoController(SignupService, myinfo) {
  var myinfoCtrl = this;
  var service = SignupService;

  myinfoCtrl.message = "";

  myinfoCtrl.myInfo = myinfo;

  var myinfo = service.getMyinfo();
  if (myinfo.length > 0) {
    myinfoCtrl.message = "Here it is!";
  }
  else {
    myinfoCtrl.message = "Not Signed Up Yet. Sign up Now!";
  }
}
})();
