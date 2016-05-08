/**
 * Created by gareth on 25/04/2016.
 */
//      AngularJS      AppName  [Dependencies]
// "Wrapping your Javascript in a closure is a good habit"
(function() {

    var app = angular.module('store', ['store-products']);
    app.controller("StoreController", ['$http', function($http){

        var store = this;
        store.products = [];

        $http.get('/app/products.json').success(function(data){
           store.products = data;
        }).error(function(data, status, header, config) {
            store.errorMessage = 'This is an error message - the call to products.json failed';
        });
    }]);
    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    })
})();