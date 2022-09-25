import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosHistoricoComponent } from './cursos-historico.component';

describe('CursosHistoricoComponent', () => {
  let component: CursosHistoricoComponent;
  let fixture: ComponentFixture<CursosHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
