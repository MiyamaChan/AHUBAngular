import { Component } from '@angular/core';
import { UserItem } from './user-item/user-item';

@Component({
  selector: 'app-user',
  imports: [UserItem],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  isUserOpen = false;

  userItems = [
    { id: 1, url: '#', title: 'Мой профиль', icon: '/assets/imgs/icon/user.svg' },
    { id: 2, url: '#', title: 'Подписчики', icon: '/assets/imgs/icon/users.svg' },
    { id: 3, url: '#', title: 'Избранное', icon: '/assets/imgs/icon/bookmark.svg' },
    { id: 4, url: '#', title: 'Подписки', icon: '/assets/imgs/icon/file-plus.svg' },
    { id: 5, url: '#', title: 'Настройки', icon: '/assets/imgs/icon/settings.svg' },
    { id: 6, url: '#', title: 'AHUB Account', icon: '/assets/imgs/icon/book.svg' },
    { id: 7, url: '#', title: 'Выйти', icon: '/assets/imgs/icon/log-out.svg' },
  ];

  ToggleUser() {
    this.isUserOpen = !this.isUserOpen;
  }
}
