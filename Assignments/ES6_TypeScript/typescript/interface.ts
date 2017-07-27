interface IPrintable {
    print: () => void
}

let circle : IPrintable = {
    print: () : void => console.log("This is a circle!")
}

let employee : IPrintable = {
    print: () : void => console.log("This is an employee!")
}

function printAll(printables : IPrintable[]) : void {
    printables.forEach((obj : IPrintable) : void => obj.print());
}

let arr : IPrintable[] = [circle, employee];
printAll(arr);