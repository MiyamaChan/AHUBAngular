import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Menu } from './menu/menu';
import { Create } from './create/create';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-header',
  imports: [Menu, Create, Profile],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() onNotificationClick = new EventEmitter<string>();
  @Output() onMessageClick = new EventEmitter<string>();
  @Output() onSearchClick = new EventEmitter<string>();

  onClickNotificationButton(e: any) {
    this.onNotificationClick.emit(e);
  }
  onClickMessageButton(a: any) {
    this.onMessageClick.emit(a);
  }
  onClickSearchButton(b: any) {
    this.onSearchClick.emit(b);
  }
}
