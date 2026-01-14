import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  imports: [],
  templateUrl: './profile-item.html',
  styleUrl: './profile-item.scss',
})
export class ProfileItem {
  @Input() items: { id: number; url: string; title: string; icon: string }[] = [];
}
