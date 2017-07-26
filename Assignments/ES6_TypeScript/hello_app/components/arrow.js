export function testArrow() {
    let names = ['Tom', 'Ivan', 'Jerry'];

    console.log(names);        
    let lens = names.map((name) => {
        var obj = {
            name : name,
            length : name.length
        };
        return obj;
    });

    console.log(lens);

}