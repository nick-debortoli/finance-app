let Santech = {
    version: "0.1",
    releaseDate: "TBA"
}

Santech.init = (options, page) => {
    // Register events for application
    options.page = page;
    Santech.controller.init();

    // Load data
    Santech.model.loadData(options);
}