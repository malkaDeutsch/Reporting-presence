import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherToKGComponent } from './add-teacher-to-kg.component';

describe('AddTeacherToKGComponent', () => {
  let component: AddTeacherToKGComponent;
  let fixture: ComponentFixture<AddTeacherToKGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeacherToKGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherToKGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
