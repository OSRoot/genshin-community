import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonFriendPagePage } from './non-friend-page.page';

describe('NonFriendPagePage', () => {
  let component: NonFriendPagePage;
  let fixture: ComponentFixture<NonFriendPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NonFriendPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
