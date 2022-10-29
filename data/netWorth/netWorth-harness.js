const netWorthDataSource = config.data.source.filter((source) => {
    return source.enabled;
})

const loadnetWorth = (callback) => {
    let netWorth = [];

    const loadComplete = (results) => {
        netWorth = netWorth.concat(results);
        callback(netWorth);
    }

    netWorthDataSource.forEach((source) => {
        switch (source.type) {
            case 'FAKE':
                loadFakenetWorth(source.options, results => loadComplete(results));
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