export class Adv {
    title: string;
    name: string;
    category: string;
    description: string;
    price: number
    img: string;

    constructor(title: string, name: string, category: string, description: string, price: number) {
        this.title = title;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}