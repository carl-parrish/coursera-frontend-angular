import { Injectable } from '@angular/core';

import * as R from 'ramda';

import { Leader } from '../shared/leader.model';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leaders: Leader[] = LEADERS;

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.leaders), 2000)
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(R.head(this.leaders.filter((leader) => leader.id === id))), 2000)
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(R.head(this.leaders.filter((leader) => leader.featured))), 2000)
    });
  }

}
