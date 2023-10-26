import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthSignUpPage } from './auth-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: AuthSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSignUpPageRoutingModule {}
