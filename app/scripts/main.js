// Functions
function log(msg) { console.log(msg) }

function checkBack() {
    $(window).on('popstate', function(){
      _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
      loadContent(_link);
    });
}

function loadContent(href){
    history.pushState(null, null, href);    
    $('#container').find('#guts').fadeOut(200, function() {
       $('#container').hide().load(href + " " + "#guts", function() {
            $('#container').fadeIn(200, function() {
            });
            if ($('div.flower-image').length) {
              log('ajax home / products');
              setInterval( "slideSwitch()", 3000);
              thumbHover();
              $('.flower-image a').on('click', function(e) {
                _link = $(this).attr("href");
                loadContent(_link);   
                e.preventDefault();
              });

            } else if($('div.product').length){
              log('ajax product');
              productSlider();

            } else if ($('article.contact').length) {
              log('ajax contact');
              initialize();

            } else if ($('article.about').length) {
              log('ajax about');
              aboutSliders();

            }
          
        });
    });
    checkBack();
}

function productSlider(){
  window.mySwipe = Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 1000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });
  var $navLi = $('#slidecount li');
  $navLi.on ('click', function () {
      window.mySwipe.slide($(this).index(), 200);
      $(this).siblings().removeClass('on');
      $(this).addClass('on');
  });
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('#slidecount').hide();
  }
}

function aboutSliders(){
  window.oneSwipe = Swipe(document.getElementById('oneswipe'), {
    startSlide: 0,
    speed: 1000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });
  var $navLi = $('#slidecount.slideone li');
  $navLi.on ('click', function () {
      window.oneSwipe.slide($(this).index(), 200);
      $(this).siblings().removeClass('on');
      $(this).addClass('on');
  });

  window.twoSwipe = Swipe(document.getElementById('twoswipe'), {
    startSlide: 0,
    speed: 1000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false
  });
  var $navLi = $('#slidecount.slidetwo li');
  $navLi.on ('click', function () {
      window.twoSwipe.slide($(this).index(), 200);
      $(this).siblings().removeClass('on');
      $(this).addClass('on');
  });

  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('#slidecount').hide();
  }
}

function setIntroHeight() {
  if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('#slideshow img').css({
      'height' : $(window).height()
    });
  } else {
    $('#slideshow img').css({
      'width' : $(window).width()
    });
  }

  if ($(window).width() > 1200) {
    $('#slideshow').css({
      'height' : $(window).height()
    });
  } else {
    $('#slideshow').css({
      'height' : $('#slideshow img').height()
    });
  };
}


function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  // use this to pull the images in the order they appear in the markup
  var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
  });
}

// Logo animation

function logoAnim() {
  var paper = new Raphael(document.getElementById('logo'), 320, 200);
  var drawpath = function( canvas, pathstr, duration, attr, callback ){
    var guidePath = canvas.path( pathstr ).attr( { stroke: 'none', fill: 'none' } );
    var path = canvas.path( guidePath.getSubpath( 0, 1 ) ).attr( attr );
    var totalLength = guidePath.getTotalLength( guidePath );
    var startTime = new Date().getTime();
    var intervalLength = 70;
    var result = path;

    var intervalId = setInterval( function() {
      var elapsedTime = new Date().getTime() - startTime;
      var thisLength = elapsedTime / duration * totalLength;
      var subpathstr = guidePath.getSubpath( 0, thisLength );
      attr.path = subpathstr;
      path.animate( attr, intervalLength);
      if ( elapsedTime >= duration ){
        clearInterval( intervalId );
        if ( callback !== undefined ) { callback(); }
          guidePath.remove();
        }
      }, intervalLength );
    return result;
  };
  
  var elem = ["M119,38.5h25 M131.5,68V39 M152.5,68V38 M173.5,68V38 M153,52.5h20 M199,38.5h-13.5v29H199 M186,52.5h10", "M93,133.5H79.5V163 M80,148.5h10 M100.5,134v29.5H114 M129.278,134.188c-2.291,0.713-9.877,4.889-9.877,14.351c0,9.104,6.851,15.312,15.091,15.312c9.081,0,15.091-6.029,15.091-14.934c0-10.416-6.916-15.542-14.399-15.542c-3.598,0-8.018,4.042-8.018,9.042c0,5.5,3.5,10.25,9.75,10.25 M178.791,163.003l-13.062-13.753c1.668-0.334,5.26-2.471,5.26-7.811c0-3.555-3.321-7.939-9.071-7.939H157.5V163 M186.5,163v-29 M196.25,160.417c1.734,2.149,4.404,3.047,6.807,3.047c2.4,0,6.752-1.547,6.752-6.38c0-4.162-1.488-6.627-6.053-8.771c-3.066-1.44-6.423-3.979-6.423-8.896c0-3.084,2.5-6.042,5.724-6.042c3.443,0,5.43,1.312,6.526,2.626 M217,133.5h25 M229.5,163v-29", "M43.083,78.327c-3.918,0-7.758,4.855-7.758,9.472c0,6.868,3.452,10.853,10.233,10.853c7.458,0,10.233-2.958,10.233-7.188c0-2.904-1.926-6.937-7.034-6.937c-3.914,0-6.499,3.433-6.499,6.517c0,4.917,4.108,6.975,6.423,8.896c2.028,1.683,6.053,3.939,6.053,8.771c0,4.834-4.353,6.381-6.753,6.381s-5.071-0.898-6.806-3.047 M67.5,115V85 M100.572,87.537c-2.354-1.622-5.794-2.837-9.076-2.836c-8.288,0-14.988,6.774-14.988,15.195c0,9.915,5.557,15.222,14.942,15.222c3.428,0,7.049-1.194,9.049-3.16V102 M112.5,115V85.35l25,29.386V85 M172.75,114.561l-12.145-29.295l-12.064,29.428 M154,102.5h13 M175,85.5h25 M187.5,115V87 M207.5,85v14.867c0,8.951,4.23,15.158,12,15.158c7.768,0,12-5.84,12-15.158V85 M262.728,114.968l-13.095-13.958c1.668-0.333,5.245-2.351,5.245-7.689c0-3.555-3.339-7.82-9.089-7.82H241.5V115 M285,85.5h-13.5v29H285 M273,100.5h9"];

  drawpath( paper, elem[0], 1000, { stroke: '#c126b8', 'stroke-width': 1, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none', 'fill-opacity': 0 });
  drawpath( paper, elem[2], 3000, { stroke: '#c126b8', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none', 'fill-opacity': 0 });
  drawpath( paper, elem[1], 2500, { stroke: '#c126b8', 'stroke-width': 1, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none', 'fill-opacity': 0 });
}

function thumbHover() {
  if($(window).width() > 723) {

    if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      
      $('.flower-image').hover(function(){
        $(this).find('.details').addClass('hide');
      }, function(){
        $(this).find('.details').addClass('hide');
      });

      $('.details.hide').css({
        'position' : 'relative',
        'opacity': 1,
        'padding-top' : '0px',
        'height' : '100px',
        'padding-bottom' : '25px'
      });
      $('.flower-image img').css({
        'padding-bottom': '0px'
      });

      $('header .logo').css('margin-left', '-40px');

    }

    $('.flower-image').hover(function(){
      $(this).find('.details').removeClass('hide');
    }, function(){
      $(this).find('.details').addClass('hide');
    });

  } else {
    $('.flower-image').hover(function(){
      $(this).find('.details').addClass('hide');
    }, function(){
      $(this).find('.details').addClass('hide');
    });

  }
}

setIntroHeight();


// DOC READY
$(document).ready(function(){

    FastClick.attach(document.body);

    if ($('div.flower-image').length) {
      log('home / products');
      setInterval( "slideSwitch()", 3000);
      thumbHover();

    } else if($('div.product').length){
      log('product');
      productSlider();

    } else if ($('article.contact').length) {
      log('contact');

    } else if ($('article.about').length) {
      log('about');
      aboutSliders();

    }
});



// AJAX LINK – MAIN MENU 
$('nav a, .menu a').on('click', function(e) {
    _link = $(this).attr("href");
    $('nav a').removeClass('active');
    $(this).addClass('active');
    loadContent(_link);   
    e.preventDefault();
});



// AJAX LINK – PRODUCT LINKS
$('.flower-image a').on('click', function(e) {
    _link = $(this).attr("href");
    loadContent(_link);   
    e.preventDefault();
});    



// WINDOW RESIZE
$(window).on('resize', function(){
  setIntroHeight();
  thumbHover();
});



if(location.pathname == "/" || location.pathname == "/sig/") {
  $(window).on('scroll.logo', function(){
    logoAnim();
    $(window).off('scroll.logo');
  });
} else {
  logoAnim();
}


// Scroll
$(window).on('scroll.intro', function(){
  if(location.pathname == "/" || location.pathname == "/sig/") {
    var scrollFromTop = $(window).scrollTop(),
      wHeight = $(window).height(),
      imgHeight = $('#slideshow img').height(),
      pageFromTop = $('#page').offset().top;

    function hideIntro(){
      if (scrollFromTop > pageFromTop) {
        $('#intro').hide();
        $(window).scrollTop(0).off('scroll.intro');
      }
    }   

    hideIntro();

    $('.logo-top').css({
      'margin-top' : -(scrollFromTop / 3),
      'opacity' : 1 - (scrollFromTop / 4000)
    }); 
    $('.main-content').css({
      'box-shadow': '0px 0px 12px '+ (-10 + (scrollFromTop / 20)) +'px rgba(0,0,0,'+ (1 - (scrollFromTop / 450)) +')'
    });
    $('#slideshow img').css({
      'margin-top' : -(scrollFromTop / 10)
    });
  }
});


/* Dropdown */
$('a.drop').on('click', function(e){
  e.preventDefault();
  if($('.menu').hasClass('open')) {
    $('.menu').removeClass('open').addClass('closed');
     $(this).find('span').removeClass('down');
  } else {
    $('.menu').removeClass('closed').addClass('open');
     $(this).find('span').addClass('down');
  }
});

$('.menu a').on('click', function(){
  var linkItemTitle = $(this).text();

  $('a.drop').empty().text(linkItemTitle);
  $('.menu').removeClass('open').addClass('closed');
  
});

$('.scroll-down').on('click', function(e){
  e.preventDefault();
  var page = $('#page').position().top;
  $('html, body').animate({scrollTop: page + 1}, 700, 'easeInOutQuart');
});


/* Gmaps */
function initialize() {

  var styles = [{
      "featureType": "landscape.man_made",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#eeeeee" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#eeeeee" }
      ]
    },{
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "elementType": "labels",
      "stylers": [
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#bbbbbb" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "transit.line",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#cccccc" }
      ]
  }];

  var position = new google.maps.LatLng(53.338407,-6.281565);

  var mapOptions = {
    zoom: 15,
    center: position,
    disableDefaultUI: true,
    styles: styles,
    scrollwheel: false

  };

  var markerIcon = "../images/marker.svg"
    

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: markerIcon
  });
   
};


function loadScript() {
  if ($('article.contact')) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkJlNG8zoRaUPkZbItpJQZ8ruFGlb8fVw&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
  }
};

window.onload = loadScript();