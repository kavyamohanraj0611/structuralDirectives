import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  //users=null;
  users=[{name:'Kavya',gender:'female',age:21},
  {name:'Harini',gender:'female',age:17},
  {name:'Nithish',gender:'male',age:19},
  {name:'Stark',gender:'male',age:26},
  {name:'Scarlet',gender:'female',age:23},
]
}

