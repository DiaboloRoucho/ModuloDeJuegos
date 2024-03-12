import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointclickComponent } from './pointclick.component';

describe('PointclickComponent', () => {
  let component: PointclickComponent;
  let fixture: ComponentFixture<PointclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
