import { Component } from '@angular/core';
import { UserItem } from './user-item/user-item';

@Component({
  selector: 'app-user',
  imports: [UserItem],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  baseUrIcon = '/assets/imgs/icon/';
  isUserOpen = false;

  userItems = [
    { id: 1, url: '#', title: 'Мой профиль', icon: `${this.baseUrIcon}user.svg` },
    { id: 2, url: '#', title: 'Подписчики', icon: `${this.baseUrIcon}users.svg` },
    { id: 3, url: '#', title: 'Избранное', icon: `${this.baseUrIcon}bookmark.svg` },
    { id: 4, url: '#', title: 'Подписки', icon: `${this.baseUrIcon}file-plus.svg` },
    { id: 5, url: '#', title: 'Настройки', icon: `${this.baseUrIcon}settings.svg` },
    { id: 6, url: '#', title: 'AHUB Account', icon: `${this.baseUrIcon}book.svg` },
    { id: 7, url: '#', title: 'Выйти', icon: `${this.baseUrIcon}log-out.svg` },
  ];

  ToggleUser() {
    this.isUserOpen = !this.isUserOpen;
  }
}
