function ajaxCall(a,b,c,d){function e(a){f.find(c).fadeOut(d,function(){f.hide().load(a+" "+c,function(){f.fadeIn(d,function(){}),window.location.href.indexOf("contact")>-1&&initialize()})}),h()}var f=$(b),g=($(c),$(a)),h=function(){$(window).on("popstate",function(){_link=location.pathname.replace(/^.*[\\\/]/,""),e(_link)})};g.on("click",function(a){_link=$(this).attr("href"),history.pushState(null,null,_link),e(_link),a.preventDefault()})}function setIntroHeight(){$("#slideshow img").css({width:$(window).width()}),$("#slideshow").css($(window).width()>1200?{height:$(window).height()}:{height:$("#slideshow img").height()})}function slideSwitch(){var a=$("#slideshow img.active");0==a.length&&(a=$("#slideshow img:last"));var b=a.next().length?a.next():$("#slideshow img:first");a.addClass("last-active"),b.css({opacity:0}).addClass("active").animate({opacity:1},1e3,function(){a.removeClass("active last-active")})}function initialize(){{var a=[{featureType:"landscape.man_made",stylers:[{visibility:"simplified"},{color:"#eeeeee"}]},{featureType:"poi",stylers:[{visibility:"simplified"},{color:"#eeeeee"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#bbbbbb"}]},{featureType:"water",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"transit.line",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#cccccc"}]}],b=new google.maps.LatLng(53.338407,-6.281565),c={zoom:15,center:b,disableDefaultUI:!0,styles:a,scrollwheel:!1},d="../images/marker.png",e=new google.maps.Map(document.getElementById("map-canvas"),c);new google.maps.Marker({position:b,map:e,icon:d})}}function loadScript(){if($("article.contant")){var a=document.createElement("script");a.type="text/javascript",a.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkJlNG8zoRaUPkZbItpJQZ8ruFGlb8fVw&sensor=false&callback=initialize",document.body.appendChild(a)}}var logoAnim=function(){var a=new Raphael(document.getElementById("logo"),320,200),b=function(a,b,c,d,e){var f=a.path(b).attr({stroke:"none",fill:"none"}),g=a.path(f.getSubpath(0,1)).attr(d),h=f.getTotalLength(f),i=(new Date).getTime(),j=70,k=g,l=setInterval(function(){var a=(new Date).getTime()-i,b=a/c*h,k=f.getSubpath(0,b);d.path=k,g.animate(d,j),a>=c&&(clearInterval(l),void 0!==e&&e(),f.remove())},j);return k},c=["M119,38.5h25 M131.5,68V39 M152.5,68V38 M173.5,68V38 M153,52.5h20 M199,38.5h-13.5v29H199 M186,52.5h10","M93,133.5H79.5V163 M80,148.5h10 M100.5,134v29.5H114 M129.278,134.188c-2.291,0.713-9.877,4.889-9.877,14.351c0,9.104,6.851,15.312,15.091,15.312c9.081,0,15.091-6.029,15.091-14.934c0-10.416-6.916-15.542-14.399-15.542c-3.598,0-8.018,4.042-8.018,9.042c0,5.5,3.5,10.25,9.75,10.25 M178.791,163.003l-13.062-13.753c1.668-0.334,5.26-2.471,5.26-7.811c0-3.555-3.321-7.939-9.071-7.939H157.5V163 M186.5,163v-29 M196.25,160.417c1.734,2.149,4.404,3.047,6.807,3.047c2.4,0,6.752-1.547,6.752-6.38c0-4.162-1.488-6.627-6.053-8.771c-3.066-1.44-6.423-3.979-6.423-8.896c0-3.084,2.5-6.042,5.724-6.042c3.443,0,5.43,1.312,6.526,2.626 M217,133.5h25 M229.5,163v-29","M43.083,78.327c-3.918,0-7.758,4.855-7.758,9.472c0,6.868,3.452,10.853,10.233,10.853c7.458,0,10.233-2.958,10.233-7.188c0-2.904-1.926-6.937-7.034-6.937c-3.914,0-6.499,3.433-6.499,6.517c0,4.917,4.108,6.975,6.423,8.896c2.028,1.683,6.053,3.939,6.053,8.771c0,4.834-4.353,6.381-6.753,6.381s-5.071-0.898-6.806-3.047 M67.5,115V85 M100.572,87.537c-2.354-1.622-5.794-2.837-9.076-2.836c-8.288,0-14.988,6.774-14.988,15.195c0,9.915,5.557,15.222,14.942,15.222c3.428,0,7.049-1.194,9.049-3.16V102 M112.5,115V85.35l25,29.386V85 M172.75,114.561l-12.145-29.295l-12.064,29.428 M154,102.5h13 M175,85.5h25 M187.5,115V87 M207.5,85v14.867c0,8.951,4.23,15.158,12,15.158c7.768,0,12-5.84,12-15.158V85 M262.728,114.968l-13.095-13.958c1.668-0.333,5.245-2.351,5.245-7.689c0-3.555-3.339-7.82-9.089-7.82H241.5V115 M285,85.5h-13.5v29H285 M273,100.5h9"];b(a,c[0],1e3,{stroke:"#c126b8","stroke-width":1,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none","fill-opacity":0}),b(a,c[2],3e3,{stroke:"#c126b8","stroke-width":3,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none","fill-opacity":0}),b(a,c[1],2500,{stroke:"#c126b8","stroke-width":1,"stroke-linecap":"round","stroke-linejoin":"round",fill:"none","fill-opacity":0})};setIntroHeight(),$(document).ready(function(){ajaxCall("nav a, .menu a","#container","#guts",200),setInterval("slideSwitch()",3e3)}),$(window).on("resize",function(){setIntroHeight()}),"/"==location.pathname||"/sig/"==location.pathname?$(window).on("scroll.logo",function(){logoAnim(),console.log("root"),$(window).off("scroll.logo")}):(logoAnim(),console.log("not root")),$(window).on("scroll.intro",function(){function a(a){b>a&&($("#intro").hide(),$(window).scrollTop(0).off("scroll.intro"))}var b=$(window).scrollTop(),c=$(window).height(),d=$("#slideshow img").height();a(d>c?c:d),$(".logo-top").css({"margin-top":-(b/3),opacity:1-b/4e3}),$(".wrapper").css({"box-shadow":"0px 0px 12px "+(-10+b/20)+"px rgba(0,0,0,"+(1-b/450)+")"})}),$("a.drop").on("click",function(a){a.preventDefault(),$(".menu").hasClass("open")?($(".menu").removeClass("open").addClass("closed"),$(this).find("span").removeClass("down")):($(".menu").removeClass("closed").addClass("open"),$(this).find("span").addClass("down"))}),$(".menu a").on("click",function(){var a=$(this).text();$("a.drop").empty().text(a),$(".menu").removeClass("open").addClass("closed")}),$(".scroll-down").on("click",function(a){a.preventDefault();var b=$("#page").position().top;$("html, body").animate({scrollTop:b+1},700,"easeInOutQuart")}),window.onload=loadScript();