let loadFakenetWorth = (options, callback) => {

    let netWorth = [];
    let accounts = ['Bank Accounts', 'Stocks', 'Home Equity', 'Cash'];
    let maxAcct = 10000;
    let minAcct = 200;
    let index = 0;
    let liquid = 0;

    accounts.forEach(acct =>  { 
        let amount = Math.random() * (maxAcct - minAcct + 1) + minAcct;
        
        if (['Bank Accounts', 'Cash'].includes(acct)) {
            liquid += amount;
        }

        let account = {
            id: index+1,
            name: acct,
            amount: Number(amount.toFixed(2))
        };
        
        netWorth.push(account);
        index++;
    })
    netWorth.push({id: index, name: 'Liquid', amount: Number(liquid.toFixed(2))});
    callback(netWorth);
};