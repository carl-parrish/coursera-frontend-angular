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

  getLeaders(): Leader[] {
    return this.leaders;
  }

  getLeader(id: string): Leader {
    return R.head(this.leaders.filter((leader) => leader.id === id));
  }

  getFeaturedLeader(): Leader {
    return R.head(this.leaders.filter((leader) => leader.featured));
  }

}
