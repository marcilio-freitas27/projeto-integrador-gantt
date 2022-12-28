import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDispositivosComponent } from './cadastrar-dispositivos.component';

describe('CadastrarDispositivosComponent', () => {
  let component: CadastrarDispositivosComponent;
  let fixture: ComponentFixture<CadastrarDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDispositivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
