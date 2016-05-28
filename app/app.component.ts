import { Component } from '@angular/core';
import { Ninja } from './ninja';
import { NinjaDetailComponent } from './ninja-detail.component';
import { NinjaService } from './ninja.service'

@Component({
  selector: 'my-app',
  templateUrl: '/app/app-template.html',
  directives: [NinjaDetailComponent],
  providers: [NinjaService]
})

export class AppComponent {
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
