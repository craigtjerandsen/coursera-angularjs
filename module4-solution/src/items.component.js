(function () {
'use strict';

angular.module('MenuApp')
.component('itemsComponent', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
