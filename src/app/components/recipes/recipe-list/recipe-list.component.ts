import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is only a test','https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
