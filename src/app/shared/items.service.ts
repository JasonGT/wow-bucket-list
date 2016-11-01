import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemsService {

  public items: Item[];

  constructor() {
    let storedItems = JSON.parse(localStorage.getItem('items'));
    this.items = <Item[]>[
      { id: 1, name: 'Wow Such Items Many Buckets Such Excite' },
      { id: 2, name: 'Steal the Angular Hack Day Trophy' },
      { id: 3, name: 'Drink Beer from the Angular Hack Day Trophy' },
      { id: 4, name: 'Travel All Around the World with the Angular Hack Day Trophy' },
      { id: 5, name: 'Learning Wood Working	' },
      { id: 6, name: 'Build a Wooden Trophy Cabinet for the Angular Hack Day Trophy' }
    ];
  }

  addItem(name: string): Item {
    let id = this.items.length + 1;
    let item = new Item(id, name);
    this.items.push(item);

    this.updateLocalStorage();

    return item;
  }

  deleteItem(item: Item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
