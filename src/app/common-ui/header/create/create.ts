import { Component } from '@angular/core';
import { CreateItem } from './create-item/create-item';

@Component({
  selector: 'app-create',
  imports: [CreateItem],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  isCreateOpen = false;

  createItems = [
    { id: 1, url: '#', title: 'Пост' },
    { id: 2, url: '#', title: 'Компанию' },
    { id: 3, url: '#', title: 'Событие' },
  ];
  toggleCreate() {
    this.isCreateOpen = !this.isCreateOpen;
  }
}
