import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-category';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = CATEGORIES;
  selectedCategory: Category;

  constructor() { }

  ngOnInit() {
  }

  onSelect(category: Category): void {    
    this.selectedCategory = category;
  }
}