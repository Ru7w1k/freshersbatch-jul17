var circle = {
    print: function () { return console.log("This is a circle!"); }
};
var employee = {
    print: function () { return console.log("This is an employee!"); }
};
function printAll(printables) {
    printables.forEach(function (obj) { return obj.print(); });
}
var arr = [circle, employee];
printAll(arr);
