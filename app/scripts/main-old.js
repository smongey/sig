'use strict';

function initialize() {

    var styles = [

        {
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
      }

    ];

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

  
  console.log(styles);
    
};


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkJlNG8zoRaUPkZbItpJQZ8ruFGlb8fVw&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}



window.onload = loadScript();





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
            });
        });
        checkBack();

    }
 
};



$(document).ajaxStop(initialize);


$(document).ready(function(){
 
    ajaxCall('nav a', '#container', '#guts', 200);


});




$(window).on('load resize', function(){
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
    });





// Slider Function 



function slideSwitch() {
    var $active = $('#slideshow img.active');
 
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
 
    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');
 
    // uncomment the 3 lines below to pull the images in random order
 
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );
 
    $active.addClass('last-active');
 
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

// slider fucntion
 
$(function() {
    setInterval( "slideSwitch()", 3000 );
});

//  Drop down js

var dropdowns = $(".dropdown");

// Onclick on a dropdown, toggle visibility
dropdowns.find("dt").click(function(){
    dropdowns.find("dd ul").hide();
    $(this).next().children().toggle();
});

// Click handler for dropdown
dropdowns.find("dd ul li a").click(function(){
    var leSpan = $(this).parents(".dropdown").find("dt a span");
  
    // Remove selected class
    $(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
  });
  
    // Update selected value
    leSpan.html($(this).html());
  
    // If back to default, remove selected class else addclass on right element
    if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
    else{
        leSpan.addClass('selected');
        $(this).addClass('selected');
    }
  
    // Close dropdown
    $(this).parents("ul").hide();
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e){
    if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

