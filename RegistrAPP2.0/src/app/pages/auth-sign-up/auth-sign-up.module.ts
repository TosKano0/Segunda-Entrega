import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthSignUpPageRoutingModule } from './auth-sign-up-routing.module';

import { AuthSignUpPage } from './auth-sign-up.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthSignUpPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthSignUpPage]
})
export class AuthSignUpPageModule {}
