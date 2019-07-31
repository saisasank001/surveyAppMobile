import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProblemCategoriesPage } from './problem-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemCategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProblemCategoriesPage]
})
export class ProblemCategoriesPageModule {}
