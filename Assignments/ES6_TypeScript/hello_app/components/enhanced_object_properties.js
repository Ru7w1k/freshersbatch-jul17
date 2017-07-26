export function testEnhancedObjectProperties() {
    let order = {
        id : 101,
        title : "sample order",
        price : 500,
        printOrder() {
            console.log("Order ID ", this.id, " Title ", this.title, " with price ", this.price);
        },
        getPrice() {
            console.log("Price : ", this.price);
        }
    };

    order.printOrder();
    order.getPrice();

    let copyOrder = {};
    Object.assign(copyOrder, order);
    console.log(copyOrder);
}