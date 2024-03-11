import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraComponent } from './mostra.component';

describe('MostraComponent', () => {
  let component: MostraComponent;
  let fixture: ComponentFixture<MostraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostraComponent]
    });
    fixture = TestBed.createComponent(MostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
