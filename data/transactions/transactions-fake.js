let loadFakeTransactions = (options, callback) => {

    let transactions = [];
    let numberOfTransactions = options.numberOfTransactions;
    let categories = options.categories;
    let maxTransaction = options.maxTransaction;
    let minTransaction = options.minTransaction;
    let dateStart = options.dateStart;
    let dateEnd = options.dateEnd;
 
    for (let index = 0; index < numberOfTransactions; index++) { 
        let category = categories[Math.floor(Math.random() * categories.length)];
        let date = new Date(+dateStart + Math.random() * (dateEnd - dateStart));
        let amount = Numnber(Math.random() * (maxTransaction - minTransaction + 1) + minTransaction);
        let transaction = {
            id: index+1,
            amount: Number(amount.toFixed(2)),
            category: category,
            date: date
        };

        transactions.push(transaction);
    }

    callback(transactions);
};