var __i=0;(function(){
	__favimg=$j("div.favorite_list a img");
	
	intid=setInterval(mloop, 1000);
	
	function mloop(){
		__favimg[__i].src='http://github.com/benchan/wass/raw/124ae9ee0b36f811301188aaa9ddcfd71eb39472/batsu.png';
		__i++;
		if(__favimg[__i]==undefined){clearInterval(intid);}
	}
 	 
})();