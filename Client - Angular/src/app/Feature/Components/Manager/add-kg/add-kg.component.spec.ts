import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKGComponent } from './add-kg.component';

describe('AddKGComponent', () => {
  let component: AddKGComponent;
  let fixture: ComponentFixture<AddKGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
