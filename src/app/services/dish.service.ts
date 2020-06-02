import { Injectable } from '@angular/core';

import * as R from 'ramda';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Dish } from '../shared/dish.model';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(R.head( DISHES.filter((dish) => dish.id === id )))
      .pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(R.head( DISHES.filter((dish) => dish.featured )))
      .pipe(delay(2000));
  }
}
