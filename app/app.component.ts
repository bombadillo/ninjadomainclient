import { Component }       from '@angular/core';
import { NinjaService }     from './ninja.service';
import { NinjasComponent } from './ninjas.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-ninjas></my-ninjas>
  `,
  directives: [NinjasComponent],
  providers: [
    NinjaService
  ]
})
export class AppComponent {
  title = 'Tour of Ninjas';
}