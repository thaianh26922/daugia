import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterForm2Page } from './register-form2.page';

describe('RegisterForm2Page', () => {
  let component: RegisterForm2Page;
  let fixture: ComponentFixture<RegisterForm2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterForm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
