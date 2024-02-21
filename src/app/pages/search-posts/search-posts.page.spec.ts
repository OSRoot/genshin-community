import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPostsPage } from './search-posts.page';

describe('SearchPostsPage', () => {
  let component: SearchPostsPage;
  let fixture: ComponentFixture<SearchPostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
