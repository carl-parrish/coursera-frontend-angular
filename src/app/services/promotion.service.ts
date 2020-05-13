import { Injectable } from '@angular/core';

import * as R from 'ramda';

import { Promotion } from '../shared/promotion.model';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return R.head(PROMOTIONS.filter((promo) => promo.id === id));
  }

  getFeaturedPromotion(): Promotion {
    return R.head(PROMOTIONS.filter((promotion) => promotion.featured));
  }
}
