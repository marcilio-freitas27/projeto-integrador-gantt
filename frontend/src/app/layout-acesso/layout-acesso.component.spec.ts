import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAcessoComponent } from './layout-acesso.component';

describe('LayoutAcessoComponent', () => {
  let component: LayoutAcessoComponent;
  let fixture: ComponentFixture<LayoutAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
