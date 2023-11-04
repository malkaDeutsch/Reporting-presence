import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchChaildComponent } from './watch-chaild.component';

describe('WatchChaildComponent', () => {
  let component: WatchChaildComponent;
  let fixture: ComponentFixture<WatchChaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchChaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
