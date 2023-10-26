import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthForgotPasswordPage } from './auth-forgot-password.page';

describe('AuthForgotPasswordPage', () => {
  let component: AuthForgotPasswordPage;
  let fixture: ComponentFixture<AuthForgotPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthForgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
