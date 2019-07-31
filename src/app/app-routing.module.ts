import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'homepage', loadChildren: './pages/homepage/homepage.module#HomepagePageModule' },
  { path: 'check-list-login', loadChildren: './pages/check-list-login/check-list-login.module#CheckListLoginPageModule' },
  { path: 'check-list', loadChildren: './pages/check-list/check-list.module#CheckListPageModule' },
  { path: 'feedback-list', loadChildren: './pages/feedback-list/feedback-list.module#FeedbackListPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },
  { path: 'problem-reporting', loadChildren: './pages/problem-reporting/problem-reporting.module#ProblemReportingPageModule' },
  { path: 'problem-categories', loadChildren: './pages/problem-categories/problem-categories.module#ProblemCategoriesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
