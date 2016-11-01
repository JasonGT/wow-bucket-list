export class Item {
    id: number;
    name: string;
    allowDelete: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.allowDelete = true;
    }
}