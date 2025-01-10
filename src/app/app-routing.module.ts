import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';
import { Pag5Component } from './pag5/pag5.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'pag1',
    component: Pag1Component,
  },

  {
    path: 'pag2',
    component: Pag2Component,
  },

  {
    path: 'pag3',
    component: Pag3Component,
  },

  {
    path: 'pag4',
    component: Pag4Component,
  },

  {
    path: 'pag5',
    component: Pag5Component,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
