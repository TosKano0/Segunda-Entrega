import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthForgotPasswordPageRoutingModule } from './auth-forgot-password-routing.module';

import { AuthForgotPasswordPage } from './auth-forgot-password.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthForgotPasswordPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthForgotPasswordPage]
})
export class AuthForgotPasswordPageModule {}
