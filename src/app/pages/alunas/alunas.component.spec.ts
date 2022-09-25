import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunasComponent } from './alunas.component';

describe('AlunasComponent', () => {
  let component: AlunasComponent;
  let fixture: ComponentFixture<AlunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
