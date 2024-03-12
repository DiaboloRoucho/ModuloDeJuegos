import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallapcComponent } from './pantallapc.component';

describe('PantallapcComponent', () => {
  let component: PantallapcComponent;
  let fixture: ComponentFixture<PantallapcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallapcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallapcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
