import { Component }       from '@angular/core';
import { NinjaService }     from './ninja.service';
import { NinjasComponent } from './ninjas.component';
import { NinjaDetailComponent } from './ninja-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.template.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    NinjaService
  ]
})

@RouteConfig([
  {
    path: '/ninjas',
    name: 'Ninjas',
    component: NinjasComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'NinjaDetail',
    component: NinjaDetailComponent
  }

])


export class AppComponent {
  title = 'Tour of Ninjas';
}