import { Component } from '@angular/core';
import { Social } from './social/social';
import { Language } from './language/language';

@Component({
  selector: 'app-footer',
  imports: [Social, Language],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  baseUrIcon = '/assets/imgs/icon/';

  socialIcons = [
    { id: 1, url: '#', img: `${this.baseUrIcon}twitter.png` },
    { id: 1, url: '#', img: `${this.baseUrIcon}instagram.png` },
    { id: 1, url: '#', img: `${this.baseUrIcon}facebook.png` },
    { id: 1, url: '#', img: `${this.baseUrIcon}linkedin.png` },
  ];
}
