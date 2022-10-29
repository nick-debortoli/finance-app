Santech.controller = function(){
    // Function to load data into the applicaiton
    const loadData = () => {
        Santech.spending.update();
        Santech.average.update();
        Santech.netWorth.update();
        Santech.savings.update();
        Santech.center.update();
    }
    return {
        init: () => {
            Santech.events.register(Santech.events.LOAD_DATA, loadData)
        }
    }
}();