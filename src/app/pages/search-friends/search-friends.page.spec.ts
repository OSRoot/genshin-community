import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFriendsPage } from './search-friends.page';

describe('SearchFriendsPage', () => {
  let component: SearchFriendsPage;
  let fixture: ComponentFixture<SearchFriendsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
