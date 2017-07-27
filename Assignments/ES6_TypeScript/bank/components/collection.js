let room1users = new Set(['user1', 'user2', 'user3']);
let room2users = new Set(['user101', 'user201', 'user301']);

let room1msgs = ['Hi', 'Hello', 'TestMsg', 'Whats going on'];
let room2msgs = ['GM', 'Good Morning', 'Test', 'Test test'];

let chatRooms = new Map();
chatRooms.set("Room1Users", room1users);
chatRooms.set("Room1Msgs", room1msgs);
chatRooms.set("Room2Users", room2users);
chatRooms.set("Room2Msgs", room2msgs);

export function testCollection() {
    console.log(getUsersFromChatRoom("Room1"));
    console.log(getMsgsFromChatRoom("Room1"));
    console.log(getUsersFromChatRoom("Room2"));
    console.log(getMsgsFromChatRoom("Room2"));
}

function getUsersFromChatRoom(room) {
    let users = chatRooms.get(room + "Users");
    return users;
}

function getMsgsFromChatRoom(room) {
    let msgs = chatRooms.get(room + "Msgs");
    return msgs;
}