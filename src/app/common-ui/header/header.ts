import { Component, signal, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() onNotificationClick = new EventEmitter<string>();

  onClickNotificationButton(e: any) {
    this.onNotificationClick.emit(e);
  }
}
