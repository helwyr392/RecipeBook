import { Component } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1O-KcqDFwiDBrag5CwG9gb-EeYlA2oMRkhCtTCR6YyJE7ti6hig'),
    new Recipe('A Test Recipe Part Two', 'This is simply another test.',
               'https://assets.wholefoodsmarket.com/recipes/4514/460/290/4514-1.jpg'),
    new Recipe('A Third Recipe', 'This is a casserole test.',
               'https://www.rd.com/wp-content/uploads/2005/10/hamburger-noodle-casserole.jpg')
  ];
}
