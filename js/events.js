!function() {
    let registered = {};

    Santech.events = {
        LOAD_DATA: "load_data",

        register: (event, fn, scope) => {
            if (event && fn) {
                let list = registered[event];
                if (!list) {
                    list = [];
                    registered[event] = list;
                }
                list.push({ fn: fn, scope: scope});

                console.log('Current Registered Events', registered)
            }
        },

        unregister: (event, fn)  => {
            if (event && fn) {
                let list = registered[event];
                if (list) {
                    let index = list.indexOf(fn);
                    if (index >= 0) {
                        list.splice(index, 1);
                    }
                    if (list.length == 0) {
                        delete registered[event];
                    }
                }
            }
        },

        send: (event, data) => {
            if (event) {
                console.log('sending out EVENT', event, data);
                let list = registered[event];
                if (list) {
                    list.forEach(d => {
                        if (d.scope) {
                            d.fn.apply(d.scope, [data])
                        } else {
                            d.fn(data);
                        }
                    })
                }
            }
        }
    }
}();