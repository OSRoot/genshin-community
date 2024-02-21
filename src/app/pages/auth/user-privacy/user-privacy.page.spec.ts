import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPrivacyPage } from './user-privacy.page';

describe('UserPrivacyPage', () => {
  let component: UserPrivacyPage;
  let fixture: ComponentFixture<UserPrivacyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
