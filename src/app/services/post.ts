import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import * as data from '../../mocks/post.json';
import { PostInterface } from '../interface/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: PostInterface[] = [];
  getPosts() {}
}
