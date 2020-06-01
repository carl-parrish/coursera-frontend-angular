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
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve =>{
      setTimeout(() => resolve(R.head( DISHES.filter((dish) => dish.id === id ))), 2000)
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise( resolve => {
      setTimeout( () => resolve(R.head( DISHES.filter((dish) => dish.featured ))) , 2000)
    }) ;
  }
}
