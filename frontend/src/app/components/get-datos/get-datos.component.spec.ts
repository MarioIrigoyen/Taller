import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDatosComponent } from './get-datos.component';

describe('GetDatosComponent', () => {
  let component: GetDatosComponent;
  let fixture: ComponentFixture<GetDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
