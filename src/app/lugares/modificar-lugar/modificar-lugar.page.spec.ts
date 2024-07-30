import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarLugarPage } from './modificar-lugar.page';

describe('ModificarLugarPage', () => {
  let component: ModificarLugarPage;
  let fixture: ComponentFixture<ModificarLugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
