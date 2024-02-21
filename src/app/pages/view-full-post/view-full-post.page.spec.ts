import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFullPostPage } from './view-full-post.page';

describe('ViewFullPostPage', () => {
  let component: ViewFullPostPage;
  let fixture: ComponentFixture<ViewFullPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewFullPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
