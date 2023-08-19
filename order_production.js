const placeorder = (callback) => {
    setTimeout(() => {
        console.log("order placed");
        callback();

    }, 2000);
};
const startproduction = (callback) => {
    setTimeout(() => {
        console.log("production started");
        callback();

    }, 5000);
};


const printID = (callback) => {
    setTimeout(() => {
        console.log("ID printed");
        callback();

    }, 5000);
};


const productname = (callback) => {
    setTimeout(() => {
        console.log("productname printed");
        callback();

    }, 5000);
};
const productDesc = (callback) => {
    setTimeout(() => {
        console.log("productDesc printed");
        callback("Day Ended");

    }, 5000);
};




console.log('ordering product......');
placeorder(() => {
    console.log("in production");
    startproduction(() => {
        console.log('start item started');
        printID(() => {
            productname(() => {
                productDesc(() => {
                    console.log("Day Ended");
                });
            });
        });
    });
});