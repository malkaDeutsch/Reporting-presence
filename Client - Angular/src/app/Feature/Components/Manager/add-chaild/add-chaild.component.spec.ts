import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaildComponent } from './add-chaild.component';

describe('AddChaildComponent', () => {
  let component: AddChaildComponent;
  let fixture: ComponentFixture<AddChaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
