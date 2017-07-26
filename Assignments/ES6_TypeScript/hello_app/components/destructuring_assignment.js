export function testDestructuringAssignment() {
    let arr = [123, 245, 563, 456];

    let [,,val,] = arr;
    console.log('3rd : ', val);

    let organization = {
        name : "sample Organization",
        address : {
            street: "J. M. Road",
            city: "Pune",
            state: "Maharashtra",
            pin: "411002"
        }
    };

    let {address: {pin}} = organization;
    console.log("pin :", pin);
}