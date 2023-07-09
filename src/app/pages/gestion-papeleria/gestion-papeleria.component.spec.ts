import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPapeleriaComponent } from './gestion-papeleria.component';

describe('GestionPapeleriaComponent', () => {
  let component: GestionPapeleriaComponent;
  let fixture: ComponentFixture<GestionPapeleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPapeleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
