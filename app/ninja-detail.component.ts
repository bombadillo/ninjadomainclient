import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Ninja } from './ninja';
import { NinjaService } from './ninja.service';

@Component({
  selector: 'my-ninja-detail',
  templateUrl: '/app/ninja-detail.template.html'
})

export class NinjaDetailComponent implements OnInit {
  
    constructor(
      private ninjaService: NinjaService,
      private routeParams: RouteParams) {
    }  
    
    ngOnInit() {
      let id = +this.routeParams.get('id');
      this.ninjaService.getNinja(id)
        .then(ninja => this.ninja = ninja);
    }    
    
    goBack() {
      window.history.back();
    }    
  
    @Input()
    ninja: Ninja;
}
