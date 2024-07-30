import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarComentarioPage } from './insertar-comentario.page';

describe('InsertarComentarioPage', () => {
  let component: InsertarComentarioPage;
  let fixture: ComponentFixture<InsertarComentarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
