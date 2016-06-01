import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Ninja }     from '../ninja/models/ninja';
import { NinjaService }     from '../ninja/services/ninja.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '/app/dashboard/dashboard.template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent implements OnInit { 
    ninjas: Ninja[] = [];
    
    constructor(
        private ninjaService: NinjaService) {
         }
    
    ngOnInit() {
        this.ninjaService.getNinjas()
            .subscribe(
            ninjas => this.ninjas = ninjas.slice(1,5),
            error => console.log(error)
            )        
    }
}
