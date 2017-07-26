export function testScoping() {
    if( true ) {
        let a = 100;
        console.log("a : ", a);
    }
    // undefined here
    // console.log("a : ", a);
}