import { Injectable } from '@angular/core';

import * as R from 'ramda';

import { Promotion } from '../shared/promotion.model';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(R.head(PROMOTIONS.filter((promo) => promo.id === id))), 2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(R.head(PROMOTIONS.filter((promotion) => promotion.featured))), 2000);
    });
  }
}
