import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Ninja } from './models/ninja';
import { NinjaService } from './services/ninja.service'

@Component({
  selector: 'my-ninjas',
  templateUrl: '/app/ninja/ninja-template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NinjasComponent implements OnInit {
  title = 'Tour of Ninjas';
  selectedNinja: Ninja;
  ninjas = [];
  
  constructor(
    private ninjaService: NinjaService) {       
    }
  
  getNinjas() {
    this.ninjaService.getNinjas()
        .subscribe(
          ninjas => this.ninjas = ninjas,
          error => console.log(error)
         )
  }
  
  ngOnInit() {
    this.getNinjas()
  }
  
  onSelect(ninja: Ninja) { 
    this.selectedNinja = ninja; 
  }
 }
