var wait =function()
{
	var ec=protractor.ExpectedConditions;
	this.waitTillElementPresent=function(element){
		browser.wait(ec.visibilityOf(element),5000);
	}
	this.waitTillElementClickable=function(element){
		browser.wait(ec.ElementToBeClickable(element),5000);
	}
	
	}
module.exports=wait