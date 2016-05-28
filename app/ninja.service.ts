import { Injectable } from '@angular/core';

import { NINJAS } from './mock-ninjas';

@Injectable()
export class NinjaService {
    getNinjas() {
        return Promise.resolve(NINJAS);
    }
}
