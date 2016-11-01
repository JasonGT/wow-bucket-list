import { Component, OnInit } from '@angular/core';

import { Item } from './shared/item';
import { ItemsService } from './shared/items.service';
import { YesNoService } from './shared/yesno.service';
import { Fibonacci } from './shared/fibonacci';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ItemsService, YesNoService, Fibonacci ]
})
export class AppComponent implements OnInit {
  newItem: string;
  items: Item[];
  fibIndex: number = 1;

  constructor(
    private itemsService: ItemsService,
    private yesNoService: YesNoService,
    private fibonacci: Fibonacci) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = this.itemsService.items;
  }

  addItem() {
    if (!this.newItem) { return; }

    this.itemsService.addItem(this.newItem);
    this.newItem = '';
  }

  tryDeleteItem(item: Item) {
    this.yesNoService.getAnswer()
      .subscribe(
        response => {
          if (response.answer === 'yes') {
            this.deleteItem(item);
          } else {
            alert('Don\'t give up on your dreams!');
            item.allowDelete = false;
            setTimeout(() => {
              item.allowDelete = true;
            }, this.getFibonacciTimeout());
          }
        }
      );
  }

  deleteItem(item: Item) {
    if (confirm('Delete ' + item.name + '?')) {
      this.itemsService.deleteItem(item);
    }
  }

  getFibonacciTimeout() {
    if (this.fibIndex < 10) {
      this.fibIndex++;
    }

    let fib = this.fibonacci.calculateFibonacciNumber(this.fibIndex);
    let timeout = fib * 10000;

    return timeout;
  }
}
