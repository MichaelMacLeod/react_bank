var React = require('react');

var AccountList = React.createClass({


  render:function(){
    var accounts = this.props.bank.filteredAccounts(this.props.type);

    var listAccounts = accounts.map(function(account, index){
      return <li key={index}> {account.owner}: £{account.amount.toFixed(2)}</li>
    })
    
    return(
        <div>
          <h3>{this.props.title}</h3>
          <ul>{listAccounts}</ul>
        </div>
      )
  }
})

module.exports = AccountList;