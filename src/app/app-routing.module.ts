import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'simple',
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/new-page/new-page.component').then(c => c.NewPageComponent),
  },
  {
    path: 'simple',
    loadComponent: () => import('./pages/simple-page/simple-page.component').then(c => c.SimplePageComponent),
  },
  {
    path: 'detailed',
    loadComponent: () => import('./pages/detailed-page/detailed-page.component').then(c => c.DetailedPageComponent),
  },
  {
    path: 'html',
    loadComponent: () => import('./pages/html-page/html-page.component').then(c => c.HtmlPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
