export function testTemplateLiteral() {
    let laptopModel = "HP Pavilion x360 13t";
    let deskNo = "23";
    let name = "Rutwik";

    let ticket = `Hello Sysnet, I'm ${name} from desk number ${deskNo}.
    I'm having some problems with my laptop.
    It's model number is ${laptopModel}`;

    console.log("Ticket : ", ticket);
}