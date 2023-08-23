const placeorder = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Order placed");
            resolve();
        }, 2000);
    });
   
};

const startProduction = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Production Started");
         resolve();
    }, 5000);
   });
};


const printId = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Id Printed");
        resolve();
    }, 5000);
    });
};

const productname = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("productname printed");
        resolve();
    }, 5000);
});

};

const productDesc = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("productdesc printed");
        resolve();
    }, 5000);
});
};

console.log('Ordering Product.........');
placeorder()
  .then(()=>{
    console.log("Product is in production.....");
    return startProduction();
  })

  .then(()=>{
    console.log("Id printing is started.....");
    return printId();
  })

  .then(()=>{
    console.log("Product name is started printing.....");
    return productname();
  })

  .then(()=>{
    console.log("Product desc is started printing.....");
    return productDesc();
  })

  .catch((error)=>{
   console.log("Error",error);
  });