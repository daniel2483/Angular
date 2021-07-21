import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply test','https://www.simplyrecipes.com/thmb/bFUkRRbhPSvzjEylmagyXDLXpdM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Asparagus-LEAD-2-8db8ad6879804b9299f28d7a3fd242a3.jpg'),
    new Recipe('A test Recipe 2','This is simply test 2','https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
