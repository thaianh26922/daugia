import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterForm3Page } from './register-form3.page';

describe('RegisterForm3Page', () => {
  let component: RegisterForm3Page;
  let fixture: ComponentFixture<RegisterForm3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterForm3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
