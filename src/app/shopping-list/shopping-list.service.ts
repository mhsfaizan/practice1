import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    addedIng = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];
    addIngrdient(ing:Ingredient){
        this.ingredients.push(ing);
        this.addedIng.emit(this.ingredients.slice());
    }
    getIngredients(){
        return this.ingredients.slice();
    }
}