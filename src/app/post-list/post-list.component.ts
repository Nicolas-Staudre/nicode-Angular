import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  date = new Date();

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreateAt: Date;

  constructor() {
    this.postCreateAt = this.date;
   }

  addLove(){
    return this.postLoveIts++;
  }
  removeLove(){
    return this.postLoveIts--;
  }

  ngOnInit() {
  }

}
