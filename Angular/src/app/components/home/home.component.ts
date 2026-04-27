import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Home - Página de Inicio
 * Ejercicio 1: Navegación con Angular Router
 * Implementa la sección de bienvenida con descripción del proyecto
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectDescription = 'Una aplicación web moderna desarrollada con Angular que demuestra ' +
    'componentes interactivos, validación de formularios, galerías dinámicas y sistema de temas.';
}
