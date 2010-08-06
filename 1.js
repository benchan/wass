var _i=0;
var _len=0;
(function(){
	_favimg=$j("div.favorite_list a img");
	_len = _favimg.length;
	_h=$j("html").height();
	
	if(_len){intid=setInterval(mloop, 500);}
	
	jQuery.each(_favimg, function() {
	   $j(this).css("left", this.x+"px");
	   $j(this).css("top", this.y+"px");
	});
	_favimg.css("position","absolute");
	
	function mloop(){
		var _y = _h-_favimg[_i].y;
		$j("div.favorite_list a img:eq("+_i+")").animate({
			top: "-="+_h+"px"}
			, 8000, "linear");
		_i++;
		if(_i>=_len){clearInterval(intid);}
	}
})();