let myNum = 100;


// myNum = myNum.toLocaleString("en-US");
//  myNum = myNum.toLocaleString("hi-IN");


// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});


// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "INR"});

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});


console.log(myNum);