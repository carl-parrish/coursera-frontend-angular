import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader.model';
import { LeaderService } from '../services/leader.service';
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
  leader: Leader;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
    ) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);

  }

}
