require('../TestData/TestData.json');
var login=require('../Pages/1Page.js');
describe('new',function(){
	beforeEach(function()
			{
		browser.get(browser.params.Login_Credentials.URL);
			});
	it('new1',function(){		
		var loginPage= new login();
		loginPage.enterValue();
	});
});