import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  onNewRecipe() {
    this.router.navigate(['/rezepte', 'neu']);
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
