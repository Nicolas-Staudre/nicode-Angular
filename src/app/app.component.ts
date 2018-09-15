import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: "Mon 1er post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore. Magni, minus deleniti, maiores quidem facere at consequuntur, consectetur eum ullam exercitationem pariatur neque dolore saepe quaerat aliquam aperiam? Temporibus.",
      loveIts: 0,
      create_at: new Date (), 
    },
    {
      title: "Mon 2ème post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore. Magni, minus deleniti, maiores quidem facere at consequuntur, consectetur eum ullam exercitationem pariatur neque dolore saepe quaerat aliquam aperiam? Temporibus.",
      loveIts: 0,
      create_at: new Date(),
    },
    {
    title: "Dernier Post",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore. Magni, minus deleniti, maiores quidem facere at consequuntur, consectetur eum ullam exercitationem pariatur neque dolore saepe quaerat aliquam aperiam? Temporibus.",
    loveIts: 0,
    create_at: new Date(),
    }
  ]

  constructor(){};

}
