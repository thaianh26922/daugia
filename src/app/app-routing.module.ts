import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'list-auction',
    loadChildren: () => import('./list-auction/list-auction.module').then( m => m.ListAuctionPageModule)
  },
  {
    path: 'live-auction',
    loadChildren: () => import('./live-auction/live-auction.module').then( m => m.LiveAuctionPageModule)
  },
  {
    path: 'register-form2',
    loadChildren: () => import('./register-form2/register-form2.module').then( m => m.RegisterForm2PageModule)
  },
  {
    path: 'register-form3',
    loadChildren: () => import('./register-form3/register-form3.module').then( m => m.RegisterForm3PageModule)
  },
  {
    path: 'regist-form',
    loadChildren: () => import('./regist-form/regist-form.module').then( m => m.RegistFormPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
