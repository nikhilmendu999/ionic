(function() {
'use strict';

angular.module('ionic.ui.popup', [])

.directive('popup', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    link: function($scope, $element){
      //$element.addClass($scope.animation || '');
    },
    template: '<div class="popup-backdrop enabled">\
                <div class="popup">\
                  <div class="popup-head">\
                    <h3 class="popup-title">{{title}}</h3>\
                  </div>\
                  <div class="popup-body">\
                    {{message}}\
                  </div>\
                </div>\
              </div>'
  };
});

})();
