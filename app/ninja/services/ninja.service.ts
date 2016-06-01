import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { Ninja } from '../ninja'

@Injectable()
export class NinjaService {
    private productUrl = '/app/ninja/ninjas.json';
    
    constructor(
        private http: Http
    ) {}
    
    getNinjas(): Observable<Ninja[]> {
        return this.http.get(this.productUrl)
                   .map((response: Response) => <Ninja[]>response.json())
                   .do(data => console.log(data));
    }
    
    getNinja(id: number): Observable<Ninja> {
        return this.http.get(this.productUrl)
                   .map((response: Response) => <Ninja> response.json().filter(ninja => ninja.id === id)[0])
                   .do(data => console.log(data));        
    }    
}
