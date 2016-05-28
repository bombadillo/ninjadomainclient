import { Component, Input } from '@angular/core';
import { Ninja } from './ninja';

@Component({
  selector: 'my-ninja-detail',
  templateUrl: '/app/ninja-detail.template.html'
})

export class NinjaDetailComponent {
    @Input()
    ninja: Ninja;
}
