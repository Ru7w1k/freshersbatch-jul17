let p1 = Promise.resolve({x:10});
let p2 = Promise.resolve({y:20});

export function testPromise() {
    Promise.all([p1,p2]).then( function(promises) {
        let res = promises[0].x + promises[1].y;
        console.log(res);
    })
}