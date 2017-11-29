// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================

$('[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #DROPDOWN
// =========================================================================

$('.dropdown__container').mouseenter(function() {
    $(this).addClass('is--active');
});

$('.dropdown__container').mouseleave(function() {
    $(this).removeClass('is--active');
});

$('.dropdown').mouseleave(function() {
    $(this).parent().removeClass('is--active');
});




// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================

/** LIGHTBOX **/
jQuery(document).ready(function($) {
    $('.lightbox').hide();
    
    $('.modal__trigger').click(function(e){
        e.preventDefault();
        $('body').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.active').removeClass('active');
        $(this).addClass('active');
        
        var activeimg = $('.active').attr('src');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);
        
    });
    
    var trigger = $('.process-thumbnails .modal__trigger');
    var active = $('.active');
    
    $('.next').click(function(){
        var next = $('.active').parent().next().children();
        $('.active').removeClass('active');
        next.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);
    });
    
    $('.prev').click(function(){
        var previous = $('.active').parent().prev().children();
        $('.active').removeClass('active');
        previous.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);     
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });   
    
});


//smooth scrolling
$(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
});

//sticky nav
$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
            $('.hamburger').addClass('sticky-hamburger');
            $('.off-canvas').addClass('sticky-nav');
        } else {
            $('.nav').removeClass('sticky'); 
            $('.hamburger').removeClass('sticky-hamburger');
            $('.off-canvas').removeClass('sticky-nav');
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });
});


//email form
var form = $('.form');

$(form).submit(function(e) {
  e.preventDefault();

  var formData = new FormData($(this)[0]);

  //if files => formData.append('file', $('input[type=file]')[0].files[0]);

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function (response) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(form);
    
    console.log('success' + response);
  })
  .fail(function (data) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-error">Oh no! Something went wrong, try again.</div>').insertAfter(form);
    
    console.log('fail' + data);
  })

});

    //image carousels

    //menu carousel
    $('.carousel').slick({
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:false,
    });

    $('.slick-prev').html("<i class=\"fa fa-angle-left\"></i>");
    $('.slick-next').html("<i class=\"fa fa-angle-right\"></i>");

    $('.slick-dots button').empty();