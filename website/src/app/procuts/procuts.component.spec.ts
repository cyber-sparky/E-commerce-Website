import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcutsComponent } from './procuts.component';

describe('ProcutsComponent', () => {
  let component: ProcutsComponent;
  let fixture: ComponentFixture<ProcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
