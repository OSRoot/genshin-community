import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterImageStagePage } from './register-image-stage.page';

describe('RegisterImageStagePage', () => {
  let component: RegisterImageStagePage;
  let fixture: ComponentFixture<RegisterImageStagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterImageStagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
