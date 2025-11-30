import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.scss',
})
export class UserItem {
  @Input() items: { id: number; url: string; title: string; icon: string }[] = [];
}
