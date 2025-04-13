import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private idCounter = 1;

  findAll(): Post[] {
    return this.posts;
  }

  createPost(createPostDto: CreatePostDto) {
    const newPost = { id: this.idCounter++, ...createPostDto };
    this.posts.push(newPost);
    return newPost;
  }
}
