const transactionDataSource = config.data.source.filter((source) => {
    return source.enabled;
})

const loadTransactions = (callback) => {
    let transactions = [];

    const loadComplete = (results) => {
        transactions = transactions.concat(results);
        callback(transactions);
    }

    transactionDataSource.forEach((source) => {
        switch (source.type) {
            case 'FAKE':
                loadFakeTransactions(source.options, results => loadComplete(results));
                break;
            case 'CSV':
                console.log('Functionality for loading CSV needs to be completed');
                break;
            case 'FIREBASE':
                console.log('Functionality for loading Firebase needs to be completed');
                break;

        }
    })
}