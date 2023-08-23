// function delay(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     });
// };

// async function user() {
//     await delay(2000);
//     console.log("image is selected")
// }

// async function imagesending() {
//     await delay(2000);
//     console.log("image send")
// }

// async function imagereceived() {
//     await delay(2000);
//     console.log("image is successfully printed ")
// }



async function main() {
    console.log("select image")
    await user()
    console.log("image is sending")
    await imagesending()
    console.log("image is printing")
    await imagereceived()

}
main()

const user = (callback) => {
    setTimeout(() => {
        console.log("image is selected");
        callback();

    }, 2000);
};
const imagesending = (callback) => {
    setTimeout(() => {
        console.log("image send");
        callback();

    }, 2000);
};


const imagereceived = (callback) => {
    setTimeout(() => {
        console.log("image is successfully printed");
        callback();

    }, 2000);
};




console.log('select image');
user(() => {
    console.log("image is sending");
    imagesending(() => {
        console.log('image is printing');
        imagereceived(() => {
            console.log("proccess  ended....")
        });
    });
});


