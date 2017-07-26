let cur = 0;

export function getNextArmstrong() {
    while(!isArmstrong(cur)) {
        cur += 1;      
    }
    console.log('Armstrong Number', cur);
    cur += 1;
};

function isArmstrong(num) {
    let sum = 0;
    while (num > 0) {
        let r = num % 10;
        sum = sum + (r * r * r);
        num = Math.floor(num / 10);
    }

    if(cur == sum) {
        return true;
    }
    else {
        return false;
    }
};