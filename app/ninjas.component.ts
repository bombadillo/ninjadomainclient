import { Component } from '@angular/core';
import { Ninja } from './ninja';
import { NinjaDetailComponent } from './ninja-detail.component';
import { NinjaService } from './ninja.service'

@Component({
  selector: 'my-ninjas',
  templateUrl: '/app/ninja-template.html',
  directives: [NinjaDetailComponent]
})

export class NinjasComponent {
  title = 'Tour of Ninjas';
  selectedNinja: Ninja;
  ninjas = [];
  
  constructor(private ninjaService: NinjaService) { }
  
  getNinjas() {
    this.ninjaService.getNinjas().then(ninjas => this.ninjas = ninjas)
  }
  
  ngOnInit() {
    this.getNinjas()
  }
  
  onSelect(ninja: Ninja) { 
    this.selectedNinja = ninja; 
  }
 }
