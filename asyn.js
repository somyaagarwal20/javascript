function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

async function placeorder() {
    await delay(2000);
    console.log("order taken")
}

async function startproduction() {
    await delay(2000);
    console.log("production started")
}

async function printID() {
    await delay(2000);
    console.log("printing ID is started")
}

async function productname() {
    await delay(2000);
    console.log("production name is started printing")
}

async function productDesc() {
    await delay(2000);
    console.log("produt desc is started printing")
}

async function main() {
    console.log("order is going to take")
    await placeorder()
    console.log("production started")
    await startproduction()
    console.log("printing ID is started")
    await printID()
    console.log("production name is started printing")
    await productname()
    console.log("produt desc is started printing")
    await productDesc()
}
main()