function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment has been processed");
            resolve();
        }, 5000);
    });
}

function sendConfirmation() {
    console.log("Order has been placed successfully");
}

makePayment()
    .then(sendConfirmation)   // ✅ pass function reference
    .catch(err => console.log(err));
