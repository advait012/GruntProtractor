var homePage = require('../Pages/2Page.js');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new homePage();
    angularHomepage.get();
    angularHomepage.setName('Vijay');
    expect(angularHomepage.getGreeting()).toEqual('Hello Vijay!');
  });
});