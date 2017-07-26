let cur = Symbol();

export class Armstrong {
    constructor() {
        this[cur] = 0;
    }

    getNextArmstrong() {
        while(!isArmstrong(this[cur])) {
            this[cur] += 1;      
        }
        console.log('Armstrong Number', this[cur]);
        this[cur] += 1;
    };
}

function isArmstrong(num) {
    let sum = 0;
    let len = 0;
    let cur = num;

    while (num > 0) {
        num = Math.floor(num / 10);
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