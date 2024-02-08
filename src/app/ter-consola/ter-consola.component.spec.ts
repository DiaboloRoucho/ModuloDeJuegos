import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TERConsolaComponent } from './ter-consola.component';

describe('TERConsolaComponent', () => {
  let component: TERConsolaComponent;
  let fixture: ComponentFixture<TERConsolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TERConsolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TERConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
