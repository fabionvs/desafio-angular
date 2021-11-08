import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissaoComponent } from './admissao.component';
import {HeaderComponent} from "../../components/header/header.component";
import {Associado} from "../../models/associado";

describe('AdmissaoComponent', () => {
  let component: AdmissaoComponent;
  let fixture: ComponentFixture<AdmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header subtitle', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Informe o CPF do futuro cooperado(a):');
  });

  it('should render header subtitle', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3 .title')?.textContent).toContain('Informe o CPF do futuro cooperado(a):');
  });

  it('form invalid when empty', () => {
    expect(component.cpfForm.valid).toBeFalsy();
  });

  it('set cpf and submit form and check Fabio Alves', () => {
    expect(component.cpfForm.valid).toBeFalsy();
    component.cpfForm.controls['cpf'].setValue("01505078170");
    expect(component.cpfForm.valid).toBeTruthy();

    // Subscribe to the Observable and store the user in a local variable.
    let associado : Associado | null = component.cpfForm.submit();


    // Now we can check to make sure the emitted value is correct
    expect(associado?.cpf).toBe("01505078170");
    expect(associado?.nome).toBe("Fabio Alves");
    expect(associado?.situacao).toBe(true);
  });
});
