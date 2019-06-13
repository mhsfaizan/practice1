import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private ingService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ingService.getIngredients();
    this.ingService.addedIng.subscribe( (ings:Ingredient[]) => {
      this.ingredients = ings;
    })
  }

}
