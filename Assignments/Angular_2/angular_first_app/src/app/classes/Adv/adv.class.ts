export class Adv {
    title: string;
    name: string;
    category: string;
    description: string;
    price: number
    id: number;

    constructor(title: string, name: string, category: string, description: string, price: number, id:number) {
        this.title = title;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.id = id;
    }
}