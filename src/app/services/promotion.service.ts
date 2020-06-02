import { Injectable } from '@angular/core';

import * as R from 'ramda';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Promotion } from '../shared/promotion.model';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(R.head(PROMOTIONS.filter((promo) => promo.id === id)))
    .pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(R.head(PROMOTIONS.filter((promotion) => promotion.featured)))
    .pipe(delay(2000));
  }
}
