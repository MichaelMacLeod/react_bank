var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');
var AccountBox = require('./AccountBox.jsx');

var BankBox = React.createClass({
  getInitialState: function(){
    return { accounts: sampleAccounts };
  },

  render:function(){

    var bank = new Bank();
    for(var account of this.state.accounts){
      bank.addAccount(account);
    }
    return(
      <div>
        <h1> React Bank Box </h1>
        <h2> Total of all accounts: £{Number(bank.totalCash()).toLocaleString()} </h2>
        <AccountBox type="business" accounts={bank.filteredAccounts('business')} title="Business Accounts: " bank={bank}></AccountBox>
        <AccountBox type="personal" accounts={bank.filteredAccounts('personal')} title="Personal Accounts: " bank={bank}></AccountBox>
      </div>
      )
  }
})

module.exports = BankBox;