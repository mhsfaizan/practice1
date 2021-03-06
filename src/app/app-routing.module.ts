import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes:Routes = [
    { path: '',redirectTo:'/shopping-list',pathMatch:'full'},
    { path:'shopping-list', component:ShoppingListComponent},
    { path:'recipes',component:RecipesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }