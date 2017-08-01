export class Advertisement {

    postId: number;
    title: string;
    name: string;
    category: string;
    description: string;
    photoCount: number;
    photos: string[];    

    constructor(postId:number, title: string, name: string, category: string, description: string) {
        this.postId = postId;
        this.title = title;
        this.name = name;
        this.category = category;
        this.description = description;
    }
}