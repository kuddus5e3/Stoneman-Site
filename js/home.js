/*****************************************************************
 * 				Supported Variable Declarations					 *
 * **************************************************************/
var log_status_counter=0;

$(function(){
	log_status_counter=0;
});


/*****************************************************************
 * 						Polygon Functions					 	 *
 * **************************************************************/

function blue(x) {
	if(log_status_counter==2){
		window.location.href = "startupverse.html";
	}
	else{
		$('svg polygon[class*="st"]').each(function(i, obj) {
			one_on_one(i,obj,x);
		});
	}
}

function green(x) {
	if(log_status_counter==2){
		window.location.href = "organizationverse.html";
	}
	else{
		$('svg polygon[class*="st"]').each(function(i, obj) {
			one_on_one(i,obj,x);
		});
	}
}

function orange(x) {
	if(log_status_counter==2){
		console.log("got redirection");
		window.location.href = "nonprofitverse.html";
	}
	else{
		$('svg polygon[class*="st"]').each(function(i, obj) {
			one_on_one(i,obj,x);
		});
	}
}

function yellow(x) {

	if(log_status_counter==2){
		window.location.href = "studentverse.html";
	}
	else{
		$('svg polygon[class*="st"]').each(function(i, obj) {
			one_on_one(i,obj,x);
		});
	}
}

function pink(x) {
	if(log_status_counter==2){
		window.location.href = "individualverse.html";
	}
	else{
		$('svg polygon[class*="st"]').each(function(i, obj) {
			one_on_one(i,obj,x);
		});
	}
}





/*******************************************************
*					Supported Functions				   *
*******************************************************/

function one_on_one(i,obj,x){
	switch(i){
			case 0: if($(obj).hasClass("blue-bl")){
						$(obj).addClass("blue-bl-close").removeClass("blue-bl");
						setTimeout(function(){
							$('svg polygon.sp'+i).hide();
						},450);
						setTimeout(function(){
						 	$(obj).removeClass("blue-bl-close");
						}, 500);
					}
					else if(x==i){
						$(obj).addClass("blue-bl");
						setTimeout(function(){
							$('svg polygon.sp'+x).show();
						},50);
					} 
					break;
			case 1: if($(obj).hasClass("green-tr")){
						$(obj).addClass("green-tr-close").removeClass("green-tr");
						setTimeout(function(){
							$('svg polygon.sp'+i).hide();
						},450);
						setTimeout(function(){
						 	$(obj).removeClass("green-tr-close");
						}, 500);
					}
					else  if(x==i){
						$(obj).addClass("green-tr");
						setTimeout(function(){
							$('svg polygon.sp'+x).show();
						},50);
					} 
					break;
			case 2: if($(obj).hasClass("orange-br")){
						$(obj).addClass("orange-br-close").removeClass("orange-br");
						setTimeout(function(){
							$('svg polygon.sp'+i).hide();
						},450);
						setTimeout(function(){
						 	$(obj).removeClass("orange-br-close");
						}, 500);
					}
					else  if(x==i){
						$(obj).addClass("orange-br");
						setTimeout(function(){
							$('svg polygon.sp'+x).show();
						},50);
					}
					break;
			case 3: if($(obj).hasClass("yellow-tl")){
						$(obj).addClass("yellow-tl-close").removeClass("yellow-tl");
						setTimeout(function(){
							$('svg polygon.sp'+i).hide();
						},450);
						setTimeout(function(){
						 	$(obj).removeClass("yellow-tl-close");
						}, 500);
					}
					else  if(x==i){
						$(obj).addClass("yellow-tl");
						setTimeout(function(){
							$('svg polygon.sp'+x).show();
						},50);
					}
					break;
			case 4: if($(obj).hasClass("pink-bl")){
						$(obj).addClass("pink-bl-close").removeClass("pink-bl");
						setTimeout(function(){
							$('svg polygon.sp'+i).hide();
						},450);
						setTimeout(function(){
						 	$(obj).removeClass("pink-bl-close");
						}, 500);
					}
					else  if(x==i){
						$(obj).addClass("pink-bl");
						setTimeout(function(){
							$('svg polygon.sp'+x).show();
						},50);
					}
					break;
		}
}



function open_ball() {
	log_status_counter++;
	$('svg polygon[class^=\'sp\']').removeAttr("style");
	$('svg polygon.st0').addClass('blue-bl');
	$('svg polygon.st1').addClass('green-tr');
	$('svg polygon.st2').addClass('orange-br');
	$('svg polygon.st3').addClass('yellow-tl');
	$('svg polygon.st4').addClass('pink-bl');
	for (var i = 0; i <= 4; i++) {
		$('svg polygon.st'+i).css("pointer-events","none");
	}
	$('.footer-container').hide();
	$('.home-container01').css("margin-bottom","5em");
	setTimeout(function(){
		for (var i = 0; i <= 4; i++) {
			$('svg polygon.sb'+i).show();
			$('.open_ball_text').show();
		}
	},500);
}

function change_open_ball_text(){
	log_status_counter++;
	for (var i = 0; i <= 4; i++) {
		$('svg polygon.st'+i).removeAttr('style');
	}
	if(log_status_counter==2){
		for (var i = 0; i <= 4; i++) {
			if($('svg polygon.st'+i).hasClass('blue-bl-hide-ball-text')){
				$('svg polygon.st'+i).removeClass('blue-bl-hide-ball-text');
			}
			else if($('svg polygon.st'+i).hasClass('green-tr-hide-ball-text')){
				$('svg polygon.st'+i).removeClass('green-tr-hide-ball-text');
			}
			else if($('svg polygon.st'+i).hasClass('orange-br-hide-ball-text')){
				$('svg polygon.st'+i).removeClass('orange-br-hide-ball-text');
			}
			else if($('svg polygon.st'+i).hasClass('yellow-bl-hide-ball-text')){
				$('svg polygon.st'+i).removeClass('yellow-bl-hide-ball-text');
			}
			else if($('svg polygon.st'+i).hasClass('pink-bl-hide-ball-text')){
				$('svg polygon.st'+i).removeClass('pink-bl-hide-ball-text');
			}
		}
		$('.open_ball_text').text("Select on of your identity to Explore");
		$('svg polygon.st3').addClass('yellow-bl-open-ball-text');
		$('svg polygon.st1').addClass('green-tr-open-ball-text');
		$('svg polygon.st2').addClass('orange-br-open-ball-text');
		$('svg polygon.st4').addClass('pink-bl-open-ball-text');
		$('svg polygon.st0').addClass('blue-bl-open-ball-text');
		setTimeout(function(){
			$('.yellow-text, .green-text, .orange-text, .pink-text, .blue-text').show();
		},500);
	}
	else{
		log_status_counter=2;
	}
}

function logo_clicked() {
	console.log(log_status_counter);
	if(log_status_counter==1)
	{
		setTimeout(function(){
			for (var i = 0; i <= 4; i++) {
				$('svg polygon.sb'+i).hide();
				$('.open_ball_text').hide();
			}
		},100);
		$('.home-container01').removeAttr("style");
		$('svg polygon.st0').addClass('blue-bl-close-ball').removeClass('blue-bl blue-bl-hide-ball-text');
		$('svg polygon.st1').addClass('green-tr-close-ball').removeClass('green-tr green-tr-hide-ball-text');
		$('svg polygon.st2').addClass('orange-br-close-ball').removeClass('orange-br orange-br-hide-ball-text');
		$('svg polygon.st3').addClass('yellow-tl-close-ball').removeClass('yellow-tl yellow-bl-hide-ball-text');
		$('svg polygon.st4').addClass('pink-bl-close-ball').removeClass('pink-bl pink-bl-hide-ball-text');
		setTimeout(function(){
			$('svg polygon.st0').removeClass('blue-bl-close-ball');
			$('svg polygon.st1').removeClass('green-tr-close-ball');
			$('svg polygon.st2').removeClass('orange-br-close-ball');
			$('svg polygon.st3').removeClass('yellow-tl-close-ball');
			$('svg polygon.st4').removeClass('pink-bl-close-ball');
		},500);
		$('.footer-container').show();
		log_status_counter--;
	}
	else if(log_status_counter==2){
		$('.open_ball_text').text("Explore The World of Multiverse");
		$('svg polygon.st3').addClass("yellow-bl-hide-ball-text").removeClass('yellow-bl-open-ball-text');
		$('svg polygon.st1').addClass("green-tr-hide-ball-text").removeClass('green-tr-open-ball-text');
		$('svg polygon.st2').addClass("orange-br-hide-ball-text").removeClass('orange-br-open-ball-text');
		$('svg polygon.st4').addClass("pink-bl-hide-ball-text").removeClass('pink-bl-open-ball-text');
		$('svg polygon.st0').addClass("blue-bl-hide-ball-text").removeClass('blue-bl-open-ball-text');
		$('.yellow-text, .green-text, .orange-text, .pink-text, .blue-text').addClass('fadeout');
		setTimeout(function(){
			/*$('svg polygon.st3').removeClass("yellow-bl-hide-ball-text");
			$('svg polygon.st1').removeClass("green-tr-hide-ball-text");
			$('svg polygon.st2').removeClass("orange-br-hide-ball-text");
			$('svg polygon.st4').removeClass("pink-bl-hide-ball-text");
			$('svg polygon.st0').removeClass("blue-bl-hide-ball-text");*/
			$('.yellow-text, .green-text, .orange-text, .pink-text, .blue-text').removeClass('fadeout').hide();
		},500);
		log_status_counter--;
	}
	else if (log_status_counter==3) {
		$('.blue-polygon').removeClass('flip-in-diag-1-tr').addClass('flip-in-diag-1-tr-rev');
		$('.whitestone').removeClass('slide-in-tl').addClass('slide-in-tl-rev');
		setTimeout(function(){
			$('.home-container02, .blue-polygon,.whitestone').hide();
			//$('home-container02').removeAttr( "style" );
			$('#Layer_1').show();
			$('.blue-polygon').removeClass('flip-in-diag-1-tr-rev').addClass('flip-in-diag-1-tr');
			$('.whitestone').removeClass('slide-in-tl-rev').addClass('slide-in-tl');
		},100);
		log_status_counter=0;
	}
	else if (log_status_counter==4) {
		$('.yellow-polygon').removeClass('slide-in-br').addClass('slide-in-br-rev');
		$('.whitestone').removeClass('slide-in-tl').addClass('slide-in-tl-rev');
		setTimeout(function(){
			$('.home-container02, .yellow-polygon,.whitestone').hide();
			//$('home-container02').removeAttr( "style" );
			$('#Layer_1').show();
			$('.yellow-polygon').removeClass('slide-in-br-rev').addClass('slide-in-br');
			$('.whitestone').removeClass('slide-in-tl-rev').addClass('slide-in-tl');
		},100);
		log_status_counter=0;
	}
	else if (log_status_counter==5) {
		$('.pink-polygon').removeClass('slide-in-tr').addClass('slide-in-tr-rev');
		$('.whitestone').removeClass('slide-in-tl').addClass('slide-in-tl-rev');
		setTimeout(function(){
			$('.home-container02, .pink-polygon, .whitestone').hide();
			//$('home-container02').removeAttr( "style" );
			$('#Layer_1').show();
			$('.pink-polygon').removeClass('slide-in-tr-rev').addClass('slide-in-tr');
			$('.whitestone').removeClass('slide-in-tl-rev').addClass('slide-in-tl');
		},100);
		log_status_counter=0;
	}
	else if(log_status_counter==6){
		$('.orange-polygon').removeClass('slide-in-tl2').addClass('slide-in-tl2-rev');
		$('.whitestone').removeClass('slide-in-tr2').addClass('slide-in-tr2-rev');
		setTimeout(function(){
			$('.home-container07, .orange-polygon, .whitestone').hide();
			//$('home-container02').removeAttr( "style" );
			$('#Layer_1').show();
			$('.orange-polygon').removeClass('slide-in-tl2-rev').addClass('slide-in-tl2');
			$('.whitestone').removeClass('slide-in-tr2-rev').addClass('slide-in-tl');
		},100);	
		log_status_counter=0;
	}
	else if(log_status_counter==7){
		$('.green-polygon').removeClass('slide-in-tl2').addClass('slide-in-tl2-rev');
		$('.whitestone').removeClass('slide-in-tr2').addClass('slide-in-tr2-rev');
		setTimeout(function(){
			$('.home-container07, .green-polygon, .whitestone').hide();
			//$('home-container02').removeAttr( "style" );
			$('#Layer_1').show();
			$('.green-polygon').removeClass('slide-in-tl2-rev').addClass('slide-in-tl2');
			$('.whitestone').removeClass('slide-in-tr2-rev').addClass('slide-in-tl');
		},100);
		log_status_counter=0;
	}
}


function login(name,con_num){
	if(name=='startup' && con_num==2){
		$('#Layer_1').hide();
		$('.home-container0'+con_num).css("display","flex");
		$('.whitestone').show();
		$('.blue-polygon').show();
		log_status_counter=3;
	}
	else if(name=='student' && con_num==2){
		$('#Layer_1').hide();
		$('.home-container0'+con_num).css("display","flex");
		$('.whitestone').show();
		$('.yellow-polygon').show();
		log_status_counter=4;
	}
	else if (name=='individual' && con_num==2) {
		$('#Layer_1').hide();
		$('.home-container0'+con_num).css("display","flex");
		$('.whitestone').show();
		$('.pink-polygon').show();
		log_status_counter=5;
	}
	else if (name=='nonprofit' && con_num==7) {
		$('#Layer_1').hide();
		$('.home-container0'+con_num).css("display","flex");
		$('.whitestone').addClass('slide-in-tr2').removeClass('slide-in-tl');
		$('.whitestone').show();
		$('.orange-polygon').show();
		log_status_counter=6;
	}
	else if(name=='organisation' && con_num==7){
		$('#Layer_1').hide();
		$('.home-container0'+con_num).css("display","flex");
		$('.whitestone').addClass('slide-in-tr2').removeClass('slide-in-tl');
		$('.whitestone').show();
		$('.green-polygon').show();
		log_status_counter=7;
	}

}

function dummy(){
	
}
