import { Injectable } from '@angular/core';

import * as R from 'ramda';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Dish } from '../shared/dish.model';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getDish(id: string): Promise<Dish> {
    return of(R.head( DISHES.filter((dish) => dish.id === id )))
      .pipe(delay(2000))
      .toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(R.head( DISHES.filter((dish) => dish.featured )))
      .pipe(delay(2000))
      .toPromise();
  }
}
