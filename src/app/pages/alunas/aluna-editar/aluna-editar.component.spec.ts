import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunaEditarComponent } from './aluna-editar.component';

describe('AlunaEditarComponent', () => {
  let component: AlunaEditarComponent;
  let fixture: ComponentFixture<AlunaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
