import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * Componente Contact - Formulario con Validación
 * Ejercicio 1: Navegación con Angular Router
 * Ejercicio 2: Formulario con validación en Angular
 * 
 * Funcionalidades:
 * - Formulario reactivo con FormGroup y FormControl
 * - Validaciones: campos obligatorios, email válido, longitud mínima
 * - Manejo de eventos: valueChanges, blur, submit
 * - Mostrar errores en tiempo real
 * - Indicadores visuales del estado de validez
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  /**
   * Inicializa el formulario con validaciones
   */
  private initializeForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Suscribirse a cambios en los valores del formulario
    this.contactForm.get('name')?.valueChanges.subscribe(value => {
      // Lógica para cambios en el nombre
    });

    this.contactForm.get('email')?.valueChanges.subscribe(value => {
      // Lógica para cambios en el email
    });
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.successMessage = 'Mensaje enviado correctamente. Te contactaremos pronto.';
      
      // Limpiar el formulario después de 2 segundos
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.successMessage = '';
      }, 2000);
    }
  }

  /**
   * Obtiene los controles del formulario para acceso más fácil en el template
   */
  getControls() {
    return this.contactForm.controls;
  }

  /**
   * Valida si un campo tiene errores y ha sido tocado
   */
  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  /**
   * Obtiene el mensaje de error de un campo
   */
  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    
    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return `${this.getFieldLabel(fieldName)} es requerido`;
    }
    if (control.errors['minlength']) {
      return `${this.getFieldLabel(fieldName)} debe tener al menos ${control.errors['minlength'].requiredLength} caracteres`;
    }
    if (control.errors['email']) {
      return 'Por favor ingresa un email válido';
    }

    return 'Este campo no es válido';
  }

  /**
   * Obtiene la etiqueta del campo para menajes de error
   */
  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje'
    };
    return labels[fieldName] || fieldName;
  }
}
