import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchKGComponent } from './watch-kg.component';

describe('WatchKGComponent', () => {
  let component: WatchKGComponent;
  let fixture: ComponentFixture<WatchKGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchKGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchKGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
