import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunaCadastroComponent } from './aluna-cadastro.component';

describe('AlunaCadastroComponent', () => {
  let component: AlunaCadastroComponent;
  let fixture: ComponentFixture<AlunaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
