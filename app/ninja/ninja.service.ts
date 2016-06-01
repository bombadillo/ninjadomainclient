import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { NINJAS } from './mock-ninjas';
import { Ninja } from './ninja'

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
    
    getNinja(id: number) {
        return Promise.resolve(NINJAS).then(
            ninjas => ninjas.filter(ninja => ninja.id === id)[0]
        );
    }    
}
