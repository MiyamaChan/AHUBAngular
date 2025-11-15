import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-item',
  imports: [],
  templateUrl: './create-item.html',
  styleUrl: './create-item.css',
})
export class CreateItem {
  @Input() items: { id: number; url: string; title: string }[] = [];
}
