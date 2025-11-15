import { Component } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  isMenuOpen = false;
  baseUrIcon = '/assets/imgs/icon/';

  menuItems = [
    { id: 1, url: '#', icon: ``, title: 'Компании' },
    { id: 2, url: '#', icon: ``, title: 'Люди' },
    { id: 3, url: '#', icon: ``, title: 'События' },
    { id: 4, url: '#', icon: `${this.baseUrIcon}services.svg`, title: 'Сервисы' },
    { id: 5, url: '#', icon: `${this.baseUrIcon}ru-word.svg`, title: 'Язык' },
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
