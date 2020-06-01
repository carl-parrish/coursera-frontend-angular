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
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<Promotion> {
    return Promise.resolve(R.head(PROMOTIONS.filter((promo) => promo.id === id)));
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(R.head(PROMOTIONS.filter((promotion) => promotion.featured)));
  }
}
