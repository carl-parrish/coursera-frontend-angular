import { Injectable } from '@angular/core';

import * as R from 'ramda';

import { Dish } from '../shared/dish.model';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(R.head( DISHES.filter((dish) => dish.id === id )));
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(R.head( DISHES.filter((dish) => dish.featured )));
  }
}
