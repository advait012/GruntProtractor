var baseclass=require('../BaseClass/BaseClass.js');
var waitPage=require('../Wait/Wait.js');	
			var loginPage=function(){
	var wait= new waitPage();
	var search=$("input#lst-ib");
	var base= new baseclass();
	this.enterValue=function()
	{
		
		base.enterText(search,"advait");
	};
};

module.exports=  loginPage
