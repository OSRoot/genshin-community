import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostOptionsPopoverPage } from './post-options-popover.page';

describe('PostOptionsPopoverPage', () => {
  let component: PostOptionsPopoverPage;
  let fixture: ComponentFixture<PostOptionsPopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostOptionsPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
