import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as data from '../../../mocks/post.json';

@Component({
  selector: 'app-post',
  imports: [NgStyle],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  @Input() post: any = data;
}
