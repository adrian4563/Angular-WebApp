import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

/**
 * Componente Services - Página de Servicios
 * Ejercicio 1: Navegación con Angular Router
 * Ejercicio 3: Galería de imágenes interactiva
 * Ejercicio 4: Sistema de posts dinámicos
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, GalleryComponent, BlogComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {}
