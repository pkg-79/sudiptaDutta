// sticky header for fixed header//
 $(window).scroll(function(){
    if ($(this).scrollTop() >= 200) {
       $('.menubar').addClass('fixed-header',2000);
    }
    else {
       $('.menubar').removeClass('fixed-header',2000);
    }
});


//bx slider for slider// 
  $('.slider').bxSlider({
  auto:true,
  pager: false,
  controls:true,
    //captions: true,
  mode: 'fade',
  autoHover: false,
  speed: 2000,
  autoDelay:100,

  });
//bx slider//


//lode more function for service offer section// 
  $(".offer-hldr-box").slice(0, 6).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".offer-hldr-box:hidden").slice(0, 3).slideDown();
    if($(".offer-hldr-box:hidden").length == 0) {
      $("#loadMore").text("Content End").addClass("noContent");
    }
});

//lode more function for blog section// 
  $(".diabetes-info-box").slice(0, 4).show();
  $("#loadMoreblog").on("click", function(e){
    e.preventDefault();
    $(".diabetes-info-box:hidden").slice(0, 2).slideDown();
    if($(".diabetes-info-box:hidden").length == 0) {
      $("#loadMoreblog").text("Content End").addClass("noContent");
    }
});


//simple lightbox for gallery section//
$(function(){
		var $gallery = $('.tab-content a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
});
  


//===== Mobile Menu hamberger menu=============================//
$(".navbar-toggler").on('click', function() {
	$(this).toggleClass("active");
});


var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

if(subMenu.length) {
	subMenu.parent('li').children('a').append(function () {
		return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
	});
	
	var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");
	
	subMenuToggler.on('click', function() {
		$(this).parent().parent().children(".sub-menu").slideToggle();
		return false
	});
}
//===== /Mobile Menu end=============================//


//scroll to top	
// hide #back-top first
    $(".scrollup").hide();
	
$(window).scroll(function(){
	if($(this).scrollTop()>250){
		$('.scrollup').fadeIn();
	}else{
		$('.scrollup').fadeOut();
		}
	});
$('.scrollup').click(function(){
	$("html, body").animate({scrollTop:0}, 1000);
	return false;
	});
	
	
	
//--------------------------------menu id call for navigation--------------------------------//
//$("#about").click(function() {
//    $('html, body').animate({
//        scrollTop: $(".about-pannal").offset().top
//    }, 1000);
//});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu-nav li a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
	
	
	
	

/*==owl carausal-slider js==*/
$('.owl-demo1').owlCarousel({
  loop:true,
  navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  nav:true,
  dots:false,
  autoplay:6000,
  smartSpeed: 1950,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

/*==/owl carausal-slider js==*/ 


/*==testimonial-slider js==*/
$('.owl-demo2').owlCarousel({
  loop:true,
  navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  nav:true,
  dots:false,
  autoplay:6000,
  smartSpeed: 1950,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
});
/*==/testimonial-slider js==*/



/*==datepicker js==*/
jQuery(document).ready(function () {
    //Date and Time Picker
    'use strict';
        jQuery('#filter-date').datetimepicker();
		
    });

    //Time Picker
    $('#datetimepicker1').datetimepicker({
	datepicker:false,
	//format:'H:i',
	format: 'hh:mm',
	step:5,
    });

    //Date Picker
    $('#datetimepicker2,#datetimepicker3,#datetimepicker4,#datetimepicker5,#datetimepicker6,#datetimepicker7').datetimepicker({
	lang:'en',
	timepicker:false,
	format:'d/m/Y',
	formatDate:'Y/m/d',
    });
/*==/datepicker js==*/
 