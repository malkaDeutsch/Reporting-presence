import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseKGComponent } from './choose-kg.component';

describe('ChooseKGComponent', () => {
  let component: ChooseKGComponent;
  let fixture: ComponentFixture<ChooseKGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseKGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseKGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
