import { Component } from '@angular/core';
import { LanguageItem } from './language-item/language-item';

@Component({
  selector: 'app-language',
  imports: [LanguageItem],
  templateUrl: './language.html',
  styleUrl: './language.css',
})
export class Language {
  baseUrIcon = '/assets/imgs/icon/';
  langsItems = [
    { id: 1, title: 'Русский', icon: `${this.baseUrIcon}ru.png` },
    { id: 1, title: 'English', icon: `${this.baseUrIcon}ru.png` },
    { id: 1, title: 'Espanol', icon: `${this.baseUrIcon}ru.png` },
    { id: 1, title: 'Другие', icon: `${this.baseUrIcon}ru.png` },
  ];
}
