function getShippingMessage(country, price, deliveryFree){
    let totalPrice = price + deliveryFree;

    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("USA", 1000, 50)); // "Shipping to USA will cost 1050 credits"
console.log(getShippingMessage("Canada", 800, 30)); // "Shipping to Canada will cost 830 credits"
console.log(getShippingMessage("UK", 1200, 70)); // "Shipping to UK will cost 1270 credits"