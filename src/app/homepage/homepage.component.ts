import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  blogImg = 'img/maven46-zara-ss16-banner-750x300.jpg';
  //blogFilter: any = { postTitle: '' };
  blogs: [{
    bligId: string,
    imageUrl: string,
    postTitle: string,
    description: string,
    publistDate: string,
    author: string,
    singlePosturl: string,
  }];
  constructor() {

    this.blogs = [
      {
        bligId: '1',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Badar Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '2',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Ayan Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '3',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Iqra Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '4',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Inaya Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '5',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Shama Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '6',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Shama Rashdi',
        singlePosturl: 'http://google.com'
      },
      {
        bligId: '7',
        imageUrl: 'assets/img/maven46-zara-ss16-banner-750x300.jpg',
        postTitle: 'Blog Post 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        publistDate: 'January 1, 2017 by',
        author: 'Shama Rashdi',
        singlePosturl: 'http://google.com'
      },
    ];

  }
  ngOnInit() {
  }

}
