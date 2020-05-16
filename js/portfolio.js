//function startJavascript()
//{
  //for sticky navigation
window.onscroll = function() {myFunction(), hello()};
var ch=document.getElementById("home").offsetTop;
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.style.position="fixed"
  } else {
    navbar.style.position="sticky";
  }
}


// for progress bar

function abhi()
{var delay = 1000;
  $(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({
      width: $(this).attr('aria-valuenow') + '%'
    }, delay);
  
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {spedd:3000,
      duration: delay,
       easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
        $(this).css({"font-size":"12px"});
      }
    });
  });
}
var i=0
$(window).on("scroll", function(){
  if(i==0)
  {if($(window).scrollTop() + $(window).height() - 100 >= $(".about").offset().top){
    abhi();
      i=1; }
  }
})
// for navigation link color




//for smooth scrolling

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);}





//animation for fade
  var $animation_elements = $('.canvas');
  var $window = $(window);
  
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animation');
        
      } 
    });
  }
  
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
//}
