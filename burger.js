const addveggies = (callback) => {
    setTimeout(() => {
        const veggies = '🌿';
        console.log("veggies prepared", veggies);
        callback(veggies);
    }, 3000);
};

const addtikki = (veggies, callback) => {
    setTimeout(() => {
        const tikki = veggies + "🫓";
        console.log("tikki prepared", tikki);
        callback(tikki);
    }, 3000);
};

const makeburger = (veggies, tikki, callback) => {
    setTimeout(() => {
        const burger = tikki + "🍔";
        console.log("burger prepared", burger);
        callback(burger);
    }, 3000);
};

addveggies((veggies) => {
    console.log("prepration for tikki stared")
    addtikki(veggies, (tikki) => {
        console.log("prepration started for making burger")
        makeburger(veggies, tikki, (burger) => {
            console.log("burger is served")
        });
    });
});
