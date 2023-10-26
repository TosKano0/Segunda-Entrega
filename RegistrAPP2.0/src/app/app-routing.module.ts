import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'auth-sign-up',
    loadChildren: () => import('./pages/auth-sign-up/auth-sign-up.module').then( m => m.AuthSignUpPageModule)
  },
  {
    path: 'auth-forgot-password',
    loadChildren: () => import('./pages/auth-forgot-password/auth-forgot-password.module').then( m => m.AuthForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
