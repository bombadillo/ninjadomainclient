import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Ninja }     from './ninja';
import { NinjaService }     from './ninja.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '/app/dashboard.template.html'
})

export class DashboardComponent { 
    ninjas: Ninja[] = [];
    
    constructor(
        private router: Router,
        private ninjaService: NinjaService) {
            
         }
    
    ngOnInit() {
        this.ninjaService.getNinjas()
        .then(ninjas => this.ninjas = ninjas.slice(1,5));
    }
    
    gotoDetail(ninja: Ninja){
        let link = ['NinjaDetail', { id: ninja.id }];
        this.router.navigate(link);        
    }    
}
