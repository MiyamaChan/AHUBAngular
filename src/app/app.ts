import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common-ui/header/header';
import { Footer } from './common-ui/footer/footer';
import { Post } from './common-ui/post/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Post],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AHUBAngular');

  openNotificationSideBar(e: any) {
    console.log('@@@@@@', e);
  }
}
