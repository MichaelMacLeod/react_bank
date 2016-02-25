var Account = require('../account');
var assert = require('assert');

describe('account', function(){
  it('should have an owner name', function(){
    var account = new Account({owner:'Jay',amount:50, type:'buisiness'});
    assert.equal(account.owner, 'Jay');
  });

})
