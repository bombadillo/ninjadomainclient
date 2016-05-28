import { Injectable } from '@angular/core';

import { NINJAS } from './mock-ninjas';

@Injectable()
export class NinjaService {
    getNinjas() {
        return Promise.resolve(NINJAS);
    }
    
    getNinja(id: number) {
        return Promise.resolve(NINJAS).then(
            ninjas => ninjas.filter(ninja => ninja.id === id)[0]
        );
    }    
}
