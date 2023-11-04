import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchParentByChaildComponent } from './watch-parent-by-chaild.component';

describe('WatchParentByChaildComponent', () => {
  let component: WatchParentByChaildComponent;
  let fixture: ComponentFixture<WatchParentByChaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchParentByChaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchParentByChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
