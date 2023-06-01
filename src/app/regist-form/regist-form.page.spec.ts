import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistFormPage } from './regist-form.page';

describe('RegistFormPage', () => {
  let component: RegistFormPage;
  let fixture: ComponentFixture<RegistFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
