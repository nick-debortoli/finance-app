const savingDataSource = config.data.source.filter((source) => {
    return source.enabled;
})

const loadSavingsGoals = (callback) => {
    let savingsGoals = [];

    const loadComplete = (results) => {
        savingsGoals = savingsGoals.concat(results);
        callback(savingsGoals);
    }

    savingDataSource.forEach((source) => {
        switch (source.type) {
            case 'FAKE':
                loadFakeSavingsGoals(source.options, results => loadComplete(results));
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