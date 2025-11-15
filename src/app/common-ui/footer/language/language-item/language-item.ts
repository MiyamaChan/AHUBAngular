import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-item',
  imports: [],
  templateUrl: './language-item.html',
  styleUrl: './language-item.css',
})
export class LanguageItem {
  @Input() langs: { id: number; title: string; icon: string }[] = [];
}
