// CALENDAR
$(document).ready(start);
function start()
{
	$("#calendar").datepicker();
}

// PRELOADER 
$(document).ready(function(){
	$(window).on('load', function () {
		var $preloader = $('#loader-wrapper'),
			$loader = $preloader.find('#loader');
		$loader.fadeOut();
		$preloader.delay(50).fadeOut('fast');
	});
});

// MENU (SMOOTH SCROLLING)
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
  
// UP BUTTON 
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
     if(top > 0) {  
       window.scrollBy(0,((top+100)/-10));  
       t = setTimeout('up()',20);  
       } else clearTimeout(t);  
       return false;  
     }
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
        }
    });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

