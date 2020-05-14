import { Injectable } from '@angular/core';

import * as R from 'ramda';

import { Dish } from '../shared/dish.model';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return R.head( DISHES.filter((dish) => dish.id === id ));
  }

  getFeaturedDish(): Dish {
    return R.head( DISHES.filter((dish) => dish.featured ));
  }
}
