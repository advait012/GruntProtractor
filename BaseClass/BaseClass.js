var base=function()
{
	this.enterText=function(element,value)
	{
		element.sendKeys(value);
	};
	
};

module.exports=base