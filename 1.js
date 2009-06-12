var __i=0;(function(){
	__favimg=$j("div.favorite_list a img");
	__favimg.css("position","absolute");
	__h=$j("html").height();
	
	intid=setInterval(mloop, 1000);
	
	function mloop(){
		var _y= -__h-__favimg[__i].y;
		__favimg[__i].animate({
			top: "-="+_y+"px"}
			, 5000, "linear");
		__i++;
		if(__favimg[__i]==undefined){clearInterval(intid);}
	}
	
 	 
})();