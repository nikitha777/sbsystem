import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListbookingComponent } from './user-listbooking.component';

describe('UserListbookingComponent', () => {
  let component: UserListbookingComponent;
  let fixture: ComponentFixture<UserListbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
