

jQuery(function ($) {

    "use strict";
    /* ===================================
           Header appear
        ====================================== */

    /* ===================================
         arrow appear and scroll to top
     ====================================== */




    $(document).on('click', '.home', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ===================================
           Navbar smooth Scroll
       ====================================== */

    if($('.portfolio-sec').length) {
        var port_target = $('.portfolio-sec').offset().top;
    }



    if($(".scroll").length) {
        $(".scroll").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 0
                }, 400, function () {

                    window.location.hash = hash;
                });
            }
        });
    }


    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }


    /* =====================================
          Parallax
       ====================================== */

    if($(window).width() < 780) {
        $('.parallax').addClass("parallax-disable");
    } else {
        $('.parallax').removeClass("parallax-disable");

        // parallax
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
                Mouse parallax
    ====================================== */

    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider

    $('.team-carousel').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots:false,
        autoplay: true,
        margin:30,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    $('#team-next').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('#team-prev').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* ===================================
           slick for testimonial
     ====================================== */

    $('.testimonial-box').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });
    /* =====================================
                    sponsers  carousel
        ====================================== */

    $('.sponser-tags').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            },
        }

    });

    /* =====================================
             slick for slider
     ====================================== */
    $(document).ready(function(){
        $('.slider-detail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            active:true,
            // fade: true,
            asNavFor: '.slider-img'
        });
        $('.slider-img').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-detail',
            dots: false,
            arrows: false,
            focusOnSelect: true,
        });
        $('.slider-arr-up').click(function(){
            $('.slider-img').slick('slickNext');
        });
        $('.slider-arr-down').click(function(){
            $('.slider-img').slick('slickPrev');
        });

    });


    /* =====================================
             circular bars
     ====================================== */

    $(".circular-wrap").appear(function () {
        $(".circle").circleProgress({
            size: 210,
            lineCap: "round",
            fill: {
                gradient: ["#202020", "#202020"]
            },
        });
    });


    $(".circular-wrap.dark").appear(function () {
        $('.myskill').circleProgress({
            lineCap: "round",
            size: 200,
        });
    });




    /* ===================================
           Cube Portfolio Initializing
    ======================================*/
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
        .on('initComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");

                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");

                }
            });
        })
        .on('onAfterLoadMore.cbp', function () {
            // your functionality
            var $this = $(this);
            $("#js-loadMore-lightbox-gallery a").addClass("d-none");
            $("#js-loadMore-lightbox-gallery").addClass("active-outer");
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        })
        .on('filterComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
                $("#js-loadMore-lightbox-gallery").removeClass("d-none");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
                $("#js-loadMore-lightbox-gallery").addClass("d-none");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        });

    //onmousehover
    $('.simple-navbar ul li a').each(function () {
        var count = $(this).children('[data-count]');
        $(this).mouseenter(function() {
            if(count.data('count')>3) {
                count.prop('Counter', 0).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }else{
                count.prop('Counter', 8).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }
        });
    });



});

