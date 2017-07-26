let preNo = Symbol();
let curNo = Symbol();

class fiboncci {
    constructor() {
        this[preNo] = 0;
        this[curNo] = 1;
    }

    next() {
        [this[curNo], this[preNo]] = [this[curNo] + this[preNo], this[curNo]];
        return this[curNo];
    }
}

export function testFib() {
    let fib = new fiboncci();
    console.log(fib.next());
    console.log(fib.next());
    console.log(fib.next());
    console.log(fib.next());
    console.log(fib.next());
}