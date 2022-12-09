import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHouseComponent } from './register-house.component';

describe('RegisterHouseComponent', () => {
  let component: RegisterHouseComponent;
  let fixture: ComponentFixture<RegisterHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
