import { Recipe } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredients.model';
@Injectable({
    providedIn:'root'
})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'The Test Recipe',
             'This is simple test', 
             'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
             [
                 new Ingredient('Apple',2),
                 new Ingredient('Mango',4),
             ]),
        new Recipe(
            'The another Test Recipe', 
            'This is another simple test', 
            'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
            [
                new Ingredient('Meat',3),
                new Ingredient('Burger',4)
            ])
    ];
    getRecipes(){
        return this.recipes.slice();
    }
}