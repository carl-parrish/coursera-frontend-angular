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
    return Promise.resolve(this.leaders);
  }

  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(R.head(this.leaders.filter((leader) => leader.id === id)));
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(R.head(this.leaders.filter((leader) => leader.featured)));
  }

}
