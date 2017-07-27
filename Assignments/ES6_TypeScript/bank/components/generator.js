export function testGenerator() {
    console.log("inside test generator");
    let armstrNo = armstrongNumbers();
    try {
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
        console.log(armstrNo.next());
    }
    catch (err) {
        console.log(err);
    }
}

function* armstrongNumbers() {
    let num = 0;
    while (true) {
        while(!isArmstrong(num) && num < 1000) {
            num += 1;      
        }
        if(num > 999) {
            throw "ErrorNumberLargeThan1000";
        }
        let reset = yield num;
        num += 1;
        if(reset) {
            num = 0;
        }
    }
}

function isArmstrong(num) {
    let sum = 0;
    let len = 0;
    let cur = num;

    while (cur > 0) {
        cur = Math.floor(cur / 10);
        len += 1;
    }

    cur = num;
    while (num > 0) {
        let r = num % 10;
        sum = sum + Math.pow(r,len);
        num = Math.floor(num / 10);
    }

    if(cur == sum) {
        return true;
    }
    else {
        return false;
    }
};