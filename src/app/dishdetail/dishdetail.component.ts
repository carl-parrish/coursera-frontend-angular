import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';

import { Dish } from '../shared/dish.model';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  selectedDish: Dish = this.dish;

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    /* tslint:disable:no-string-literal */
    const id = this.route.snapshot.params['id'];
  /* tslint:enable:no-string-literal */

    this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }


}
