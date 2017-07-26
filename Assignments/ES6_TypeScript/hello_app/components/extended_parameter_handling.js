export function testExtendedParameterHandling() {
    let maths = {
        add(num1 = 10, num2 = 20) {
            return num1 + num2;
        }
    }

    console.log(maths.add());
    console.log(maths.add(30));
    console.log(maths.add(undefined, 45));

    let userFriends = function(username, ...friends) {
        let frnds = "";
        friends.map((frnd) => frnds += frnd + ' ');
        console.log(username, '\'s friends : ', frnds);
        // friends.map((frnd) => console.log(username, ' knows ', frnd));
    }
    userFriends('Rutwik','Tom', 'Ivan', 'Jerry');

    let printCapitalNames = function(n1, n2, n3, n4, n5) {
        console.log("First : ", n1.toUpperCase());
        console.log("Second : ", n2.toUpperCase());
        console.log("Third : ", n3.toUpperCase());
        console.log("Forth : ", n4.toUpperCase());
        console.log("Fifth : ", n5.toUpperCase());
    }

    let names = ['Rutwik', 'Tony', 'Tom', 'Jerry', 'Ivan', 'Sample'];
    printCapitalNames(...names);

    
}