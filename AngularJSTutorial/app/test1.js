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
            ],
            reviews: [{
                    stars: 5,
                    body: "Review 1",
                    author: "Author 1"
                },
                {
                    stars: 4,
                    body: "Review 1b",
                    author: "Author 1b"
                }
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
            ],
            reviews: [{
                stars: 3,
                body: "Review 2",
                author: "Author 2"
            }
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
            ],
            reviews: [{
                stars: 1,
                body: "Review 3",
                author: "Author 3"
            }
            ]
        }
    ];

    var app = angular.module('store', []);
    app.controller("StoreController", function(){
        this.products = gems;
    })
    app.controller("PanelController", function() {
        this.tab = 2;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return (checkTab === this.tab);
        };
    })
    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    })
})();
