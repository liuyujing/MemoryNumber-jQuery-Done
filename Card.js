/**
 * Created by liuyujing on 16/8/29.
 */

$(function () {

    function Card(number) {
        var width = 100;
        var height = 100;

        var self = {};
        var htmlNode;
        var divA,divB;
        var aVisible = true;
        var animating = false;

        self.getHtmlNode = function () {
            return htmlNode;
        };

        self.getWidth = function () {
            return width;
        };

        self.getHeight = function () {
            return height;
        };
        self.getNumber = function () {
            return number;
        };

        self.showA = function () {
            aVisible = true;
            divA.css("display","block");
            divB.css("display","none");

        };
        self.showB = function () {
            divA.css("display","none");
            divB.css("display","block");
            aVisible = false;
        };
    
        self.returnB = function () {
            if (!animating && aVisible) {
                animating = true;
                var self = this;
                ucai.animate(divA[0], "width", 100, 0, "%", 200, function (target) {
                    self.showB();

                    ucai.animate(divB[0], "width", 0, 100, "%", 200, function (target) {
                        animating = false;
                    });
                });
            }
        };

        self.setPosition = function (xOrPosition, y) {
            switch (arguments.length) {
                case 1:
                    htmlNode.css("left",xOrPosition.x + "px");
                    htmlNode.css("top",xOrPosition.y + "px");
                    break;
                case 2:
                    htmlNode.css("left",xOrPosition + "px");
                    htmlNode.css("top",y + "px");
                    break;
            }
        };
        function init() {

            htmlNode = $("<div></div>").appendTo($("body"));
            htmlNode.addClass("card2d");
            htmlNode.css("width",width+"px");
            htmlNode.css("height",height+"px");

            divA =  $("<div></div>");
            divA.addClass("card card-a").text(""+number);
            htmlNode.append(divA);

            divB = $("<div></div>");
            divB.addClass("card card-b");
            htmlNode.append(divB);

            self.showA();
            htmlNode.delegate("div","click", function (e) {
                if (self.click) {
                    self.click(self);
                }
            });
            
        }

        init();
        return self;
    }
    window.Card = Card;
});
