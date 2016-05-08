/**
 * Created by gareth on 8/05/2016.
 */
/**
 * Created by gareth on 25/04/2016.
 */
//      AngularJS      AppName  [Dependencies]
// "Wrapping your Javascript in a closure is a good habit"
(function() {

    var app = angular.module('store-products', []);

    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: "product-gallery.html",
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });
    app.directive("productTitle", function() {
        return {
            restrict: 'E',
            templateUrl: "product-title.html"
        };
    })
    app.directive("productPanels", function() {
        return {
            restrict: 'E',
            templateUrl: "product-panels.html",
            controller: function() {
                this.tab = 2;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return (checkTab === this.tab);
                };
            },
            controllerAs: 'panel' // alias. ie PanelController as panel
        };
    })
})();