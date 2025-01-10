import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule aquí
import { Pag1Component } from './pag1.component';  // Importa tu componente

@NgModule({
  declarations: [Pag1Component],
  imports: [
    CommonModule,
    IonicModule  // Importa IonicModule aquí también
  ],
})
export class Pag1PageModule {}


describe('Pag1Component', () => {
  let component: Pag1Component;
  let fixture: ComponentFixture<Pag1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
