// An example configuration file.
exports.config = {
//  directConnect: true,
//  seleniumAddress:'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  chromeOptions:{
//	  useAutomationExtension:false
	  'args':['--disable-extensions']
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  	
  // Spec patterns are relative to the current working directory when
  // protractor is called.
//  specs: ['../Tests/*.js'],
//  specs: ['../Tests/1Test.js'],
  
  suites: {
      regressionTests: ['../Tests/1Test.js']//will run all specs in subfolders 
     },
  
  params:require('../TestData/TestData.json'),
  
  onPrepare: function() {
	  

	    	
	    
	 
	    browser.driver.manage().window().maximize();
	    browser.ignoreSynchronization=true;
	    
	    
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts:	 {
    defaultTimeoutInterval: 30000
  }
}
