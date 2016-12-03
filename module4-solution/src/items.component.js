(function () {
'use strict';

angular.module('items')
.component('items', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
