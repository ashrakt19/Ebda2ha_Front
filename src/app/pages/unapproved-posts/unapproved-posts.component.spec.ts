import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedPostsComponent } from './unapproved-posts.component';

describe('UnapprovedPostsComponent', () => {
  let component: UnapprovedPostsComponent;
  let fixture: ComponentFixture<UnapprovedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
