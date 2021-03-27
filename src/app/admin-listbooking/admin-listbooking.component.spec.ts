import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListbookingComponent } from './admin-listbooking.component';

describe('AdminListbookingComponent', () => {
  let component: AdminListbookingComponent;
  let fixture: ComponentFixture<AdminListbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
