// Functions

var ajaxCall = function(link, container, guts, speed){
 
    var mainContent = $(container);
    var contents = $(guts);
    var makeCall = $(link);
    var checkBack = function() {
        $(window).on('popstate', function(){
           _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
           loadContent(_link);
        });
    }
 
    makeCall.on("click", function(e) {
        _link = $(this).attr("href");
        history.pushState(null, null, _link);
        loadContent(_link);   
        e.preventDefault();

    });
 
    function loadContent(href){
        mainContent.find(guts).fadeOut(speed, function() {
            mainContent.hide().load(href + " " + guts, function() {
                mainContent.fadeIn(speed, function() {
                });
                if(window.location.href.indexOf("contact") > -1) {
                  initialize();
                }
              
            });
        });
        checkBack();

    }
 
};

var setIntroHeight = function() {

  $('#slideshow img').css({
      // 'height' : $(window).height(),
      'width' : $(window).width()
  });
  if ($(window).width() > 1200) {
    $('#slideshow').css({
      'height' : $(window).height()
    });

  } else {
    $('#slideshow').css({
      'height' : $('#slideshow img').height()
    });
  };
};


var slideSwitch = function() {
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
};




// Init

setIntroHeight();



// Ready
$(document).ready(function(){
    ajaxCall('nav a, .menu a', '#container', '#guts', 200);
    setInterval( "slideSwitch()", 3000);
});

// Resize
$(window).on('resize', function(){
  setIntroHeight();
});

// Scroll
$(window).on('scroll', function(){
  var scrollFromTop = $(window).scrollTop(),
    wHeight = $(window).height(),
    imgHeight = $('#slideshow img').height();

  var hideIntro = function(elem){
    if (scrollFromTop > elem) {
      $('#intro').hide();
      $(window).scrollTop(0).off('scroll');
    }
  }    

  if (imgHeight > wHeight) {
    hideIntro(wHeight);
  } else {
    hideIntro(imgHeight);
  }

  $('.logo-top').css({
    'margin-top' : -(scrollFromTop / 3),
    'opacity' : 1 - (scrollFromTop / 700)
  }); 
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

  var markerIcon = "../images/marker.png"
    

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: markerIcon
  });
   
};


function loadScript() {
  if ($('article.contant')) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkJlNG8zoRaUPkZbItpJQZ8ruFGlb8fVw&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
  }
};

window.onload = loadScript();