$(function(){
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