import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Ninja }     from '../ninja/ninja';
import { NinjaService }     from '../ninja/ninja.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '/app/dashboard/dashboard.template.html'
})

export class DashboardComponent implements OnInit { 
    ninjas: Ninja[] = [];
    
    constructor(
        private router: Router,
        private ninjaService: NinjaService) {
            
         }
    
    ngOnInit() {
        this.ninjaService.getNinjas()
            .subscribe(
            ninjas => this.ninjas = ninjas.slice(1,5),
            error => console.log(error)
            )        
    }
    
    gotoDetail(ninja: Ninja){
        let link = ['NinjaDetail', { id: ninja.id }];
        this.router.navigate(link);        
    }    
}
