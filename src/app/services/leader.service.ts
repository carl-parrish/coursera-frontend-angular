import { Injectable } from '@angular/core';

import * as R from 'ramda';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Leader } from '../shared/leader.model';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leaders: Leader[] = LEADERS;

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(this.leaders).pipe(delay(2000));

  }

  getLeader(id: string): Observable<Leader> {
    return of(R.head(this.leaders.filter((leader) => leader.id === id)))
    .pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(R.head(this.leaders.filter((leader) => leader.featured)))
    .pipe(delay(2000));
  }

}
