import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarLugarPage } from './insertar-lugar.page';

describe('InsertarLugarPage', () => {
  let component: InsertarLugarPage;
  let fixture: ComponentFixture<InsertarLugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
