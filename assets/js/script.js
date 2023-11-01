$(function () {
  "use strict";

    // Toggle mobile navigation
    function toggleMobileNavigation() {
      var navbar = $(".navigation-holder");
      var openBtn = $(".mobail-menu .open-btn");
      var xbutton = $(".mobail-menu .navbar-toggler");

      openBtn.on("click", function(e) {
          e.stopImmediatePropagation();
          navbar.toggleClass("slideInn");
          xbutton.toggleClass("x-close");
          return false;
      })
  }
  toggleMobileNavigation();

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
      var windowWidth = window.innerWidth;
      var mainNav = $("#navbar > ul");

      if (windowWidth <= 991) {
          mainNav.addClass("small-nav");
      } else {
          mainNav.removeClass("small-nav");
      }
  }
  toggleClassForSmallNav();


  // Function for small menu
  function smallNavFunctionality() {
      var windowWidth = window.innerWidth;
      var mainNav = $(".navigation-holder");
      var smallNav = $(".navigation-holder > .small-nav");
      var subMenu = smallNav.find(".sub-menu");
      var megamenu = smallNav.find(".mega-menu");
      var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

      if (windowWidth <= 991) {
          subMenu.hide();
          megamenu.hide();
          menuItemWidthSubMenu.on("click", function(e) {
              var $this = $(this);
              $this.siblings().slideToggle();
              e.preventDefault();
              e.stopImmediatePropagation();
              $this.toggleClass("rotate");
          })
      } else if (windowWidth > 991) {
          mainNav.find(".sub-menu").show();
          mainNav.find(".mega-menu").show();
      }
  }
  smallNavFunctionality();

  $("body").on("click", function() {
      $('.navigation-holder').removeClass('slideInn');
  });
  $(".menu-close").on("click", function() {
      $('.navigation-holder').removeClass('slideInn');
  });
  $(".menu-close").on("click", function() {
      $('.open-btn').removeClass('x-close');
  });



  /*------------------------------------------
      = STICKY HEADER
  -------------------------------------------*/

  // Function for clone an element for sticky menu
  function cloneNavForSticyMenu($ele, $newElmClass) {
      $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
  }

  // clone home style 1 navigation for sticky menu
  if ($('.wpo-site-header .navigation').length) {
      cloneNavForSticyMenu($('.wpo-site-header .navigation'), "sticky-header");
  }

  var lastScrollTop = '';

  function stickyMenu($targetMenu, $toggleClass) {
      var st = $(window).scrollTop();
      var mainMenuTop = $('.wpo-site-header .navigation');

      if ($(window).scrollTop() > 1000) {
          if (st > lastScrollTop) {
              // hide sticky menu on scroll down
              $targetMenu.removeClass($toggleClass);

          } else {
              // active sticky menu on scroll up
              $targetMenu.addClass($toggleClass);
          }

      } else {
          $targetMenu.removeClass($toggleClass);
      }

      lastScrollTop = st;


  }


/*------------------------------------------
      = Header search toggle
  -------------------------------------------*/
  if($(".header-search-form-wrapper").length) {
      var searchToggleBtn = $(".search-toggle-btn");
      var searchToggleBtnIcon = $(".search-toggle-btn i");
      var searchContent = $(".header-search-form");
      var body = $("body");

      searchToggleBtn.on("click", function(e) {
          searchContent.toggleClass("header-search-content-toggle");
          // searchToggleBtnIcon.toggleClass("fi flaticon-loupe fi ti-close");
          e.stopPropagation();
      });
      body.on("click", function() {
          searchContent.removeClass("header-search-content-toggle");
      }).find(searchContent).on("click", function(e) {
          e.stopPropagation();
      });
  }


  /*------------------------------------------
      = Header shopping cart toggle
  -------------------------------------------*/
  if($(".mini-cart").length) {
      var cartToggleBtn = $(".cart-toggle-btn");
      var cartContent = $(".mini-cart-content");
      var cartCloseBtn = $(".mini-cart-close");
      var body = $("body");

      cartToggleBtn.on("click", function(e) {
          cartContent.toggleClass("mini-cart-content-toggle");
          e.stopPropagation();
      });

      cartCloseBtn.on("click", function(e) {
          cartContent.removeClass("mini-cart-content-toggle");
          e.stopPropagation();
      });

      body.on("click", function() {
          cartContent.removeClass("mini-cart-content-toggle");
      }).find(cartContent).on("click", function(e) {
          e.stopPropagation();
      });
  }



  //nice select
  $(document).ready(function() {
    $('select').niceSelect();
  });

  // hero slider for homepage-02
  // $(function() { 
  // // Card's slider
  // var $carousel = $('.main-slider');

  // $carousel
  //     .slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     adaptiveHeight: true,
  //     asNavFor: '.slider-thumb'
  //     })
      
  // $('.slider-thumb').slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     asNavFor: '.main-slider',
  //     dots: false,
  //     centerMode: false,
  //     focusOnSelect: true,
  //     variableWidth: true
  // });
  // });

  // hero slider for homepage-03
  $('.hero-s3-wrapper').slick({
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    nextArrow: "<button class='slick-prev pull-right'><i class='icofont-arrow-right'></i></button>",
    prevArrow: "<button class='slick-prev pull-left'><i class='icofont-arrow-left'></i></button>",

  });


  // docteam
  $('.active-docteam').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: false
        //   }
        // },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  // Brand active 
  $('.brand-active').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  // second team member 
  $('.second-team-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false
      //   }
      // },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // third team member 
  $('.third-team-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false
      //   }
      // },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // testimoni active 
  $('.testimoni-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // centerPadding: '60px',
    // centerMode: true,
    // focusOnSelect:true,
    // center: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false
      //   }
      // },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // blog active 
  $('.blog-slider-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // second blog active 
  $('.second-blog-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Working process  
  $('.working-process-active').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // = POPUP VIDEO
  // -------------------------------------------*/
  // if ($(".video-btn").length) {
  //     $(".video-btn").on("click", function(){
  //         $.fancybox({
  //             href: this.href,
  //             type: $(this).data("type"),
  //             'title'         : this.title,
  //             helpers     : {
  //                 title : { type : 'inside' },
  //                 media : {}
  //             },

  //             beforeShow : function(){
  //                 $(".fancybox-wrap").addClass("gallery-fancybox");
  //             }
  //         });
  //         return false
  //     });
  // }

  // odometer 
  if ($(".odometer").length) {
      $('.odometer').appear();
      $(document.body).on('appear', '.odometer', function (e) {
          var odo = $(".odometer");
          odo.each(function () {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
          });
      });
  }

// project isotop filtering 

$(window).on('load', function() {
  var $container = $('.project-grid');

  $container.imagesLoaded( function() {
      $container.isotope({
          itemSelector : '.grid-item', 
          layoutMode : 'masonry',
          percentPosition: true
      });
  });
  
  $('.filter-button-group').on( 'click', '.nav-link', function() {
      $(".filter-button-group .nav-link").removeClass('active')
      $(this).addClass('active')
      var sortByValue = $(this).attr('data-filter');
      $container.isotope({
          filter:sortByValue
      })
  });
});



// wow js 
new WOW().init();


// video popup

$(document).ready(function() {


  $('.popup-vido-s1').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});
});

//choose more section image upper click plust and show the name box
$(document).on('click','.plus-iocn',function(){
  
  $(".plus-iocn").removeClass("active");
  $(this).addClass("active")
})



})