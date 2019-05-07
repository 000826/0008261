$(function(){
	$(window).ready(function() {
		if($(window).width() <= 768){
			$(".item").eq(1).addClass("active");
			$(".item").eq(2).addClass("active");
			
		}else{
			$(".item").eq(1).removeClass("active");
			$(".item").eq(2).removeClass("active");
		}
	})
	
	$(window).resize(function() {
		if($(window).width() <= 768){
			$(".item").eq(1).addClass("active");
			$(".item").eq(2).addClass("active");
			
		}else{
			$(".item").eq(1).removeClass("active");
			$(".item").eq(2).removeClass("active");
		}
	})
	
	
	$(document).scroll(function(){
			if ($(document).scrollTop()>300) {
					$(".spanbutton").fadeIn(400)	;
				} else{
					$(".spanbutton").fadeOut(400)	;
				}
		})		
	$(".spanbutton").click(function(){
		$("html,body").animate({scrollTop:0},800);
			
	})
	$(".myHeaderBtn").click(function(){
		$(".spanclose").text("关闭");
		
	})
	
})