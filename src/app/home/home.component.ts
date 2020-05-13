import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion.model';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishService: DishService, private promotionservice: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
