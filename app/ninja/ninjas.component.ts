import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Ninja } from './ninja';
import { NinjaDetailComponent } from './ninja-detail.component';
import { NinjaService } from './ninja.service'

@Component({
  selector: 'my-ninjas',
  templateUrl: '/app/ninja/ninja-template.html'
})

export class NinjasComponent implements OnInit {
  title = 'Tour of Ninjas';
  selectedNinja: Ninja;
  ninjas = [];
  
  constructor(
    private router: Router,
    private ninjaService: NinjaService) {       
    }
  
  getNinjas() {
    this.ninjaService.getNinjas().then(ninjas => this.ninjas = ninjas)
  }
  
  ngOnInit() {
    this.getNinjas()
  }
  
  onSelect(ninja: Ninja) { 
    this.selectedNinja = ninja; 
  }
  
  gotoDetail() {
    this.router.navigate(['NinjaDetail', { id: this.selectedNinja.id }]);
  }  
 }
