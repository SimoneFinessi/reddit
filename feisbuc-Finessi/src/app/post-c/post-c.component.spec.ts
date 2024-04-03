import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCComponent } from './post-c.component';

describe('PostCComponent', () => {
  let component: PostCComponent;
  let fixture: ComponentFixture<PostCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCComponent]
    });
    fixture = TestBed.createComponent(PostCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
