/**
 * Created by gareth on 25/04/2016.
 */
//      AngularJS      AppName  [Dependencies]
// "Wrapping your Javascript in a closure is a good habit"
(function() {
    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "some description",
            canPurchase: true,
            soldOut: false,
            images: [
                "test1.png"
            ]
        },
        {
            name: "Rhombus",
            price: 1.11,
            description: "some description 2",
            canPurchase: true,
            soldOut: false,
            images: [
                "test2.png"
            ]
        },
        {
            name: "Diamond",
            price: 2.00,
            description: "some description 3",
            canPurchase: true,
            soldOut: false,
            images: [
                "test1.png",
                "test2.png"
            ]
        }
    ];

    var app = angular.module('store', []);
    app.controller("StoreController", function(){
        this.products = gems;
    })
})();
