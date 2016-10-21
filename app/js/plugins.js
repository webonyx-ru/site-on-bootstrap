$(document).ready(function() {

    var doc = $(document);


    doc.click(function (e) {
        var target = $(e.target),
            popup = target.closest(".popup");
        popup_open = target.closest(".popup_open");

        if ((!popup.length > 0 ) && (!popup_open.length > 0 )) {
            $(".popup").removeClass("visible");
            $(".site-wrap__overlay").fadeOut(400);
        }

    });



    doc.on("click", ".slider-b__item", function(e){
        var index_el = $(this).index();
        $(this).addClass("active");

        $(this).closest(".slider-b").find(".owl-dot:eq("+index_el+")").trigger("click");

    });

    $(".owl-carousel").owlCarousel({

        nav: true,
        dots: true,
        items: 1

    });
});