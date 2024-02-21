import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendPagePage } from './friend-page.page';

describe('FriendPagePage', () => {
  let component: FriendPagePage;
  let fixture: ComponentFixture<FriendPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FriendPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
