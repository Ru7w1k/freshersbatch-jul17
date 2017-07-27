interface IPrintable {
    print: () => void
}

let circle : IPrintable = {
    print: () => console.log("This is a circle!")
}

let employee : IPrintable = {
    print: () => console.log("This is an employee!")
}

function printAll(printables : Array<IPrintable>) : void {
    printables.forEach((obj) => obj.print());
}

printAll([circle, employee]);