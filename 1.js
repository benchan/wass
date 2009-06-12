var __i=0;
(function(){
	__favimg=$j("div.favorite_list a img");
	__favimg.css("position","absolute");
	__imgs = jQuery.makeArray(__favimg);
	__h=$j("html").height();
	
	intid=setInterval(mloop, 1000);
	
	function mloop(){
		var _y= -__h-__imgs[__i].y;
		__imgs[__i].animate({
			top: "-="+_y+"px"}
			, 5000, "linear");
		__i++;
		if(__imgs[__i]==undefined){clearInterval(intid);}
	}
	
 	 
})();