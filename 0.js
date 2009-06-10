var __i=0;(function(){
	__favimg=$j("div.favorite_list a img");
	
	intid=setInterval(mloop, 1000);
	
	function mloop(){
		__favimg[__i].src='http://www.google.co.jp/intl/ja_jp/images/logo.gif';
		__i++;
		if(__favimg[__i]==undefined){clearInterval(intid);}
	}
 	 
})();