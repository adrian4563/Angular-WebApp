import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Gallery - Galería de Imágenes Interactiva
 * Ejercicio 3: Galería de imágenes interactiva
 * 
 * Funcionalidades:
 * - Mostrar miniaturas de imágenes
 * - Actualizar imagen principal dinámicamente
 * - Resaltar imagen seleccionada
 * - Usar [src], [alt], [ngClass] y *ngIf
 */
interface Image {
  id: number;
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedImageId = 1;

  images: Image[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', alt: 'Desarrollo Web', title: 'Desarrollo Web y Apps' },
    { id: 2, src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80', alt: 'Diseño UI/UX', title: 'Diseño UI/UX' },
    { id: 3, src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', alt: 'Marketing Digital', title: 'Marketing Digital' },
    { id: 4, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', alt: 'Consultoría TI', title: 'Consultoría Estratégica TI' },
    { id: 5, src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80', alt: 'Soporte Técnico', title: 'Soporte Técnico 24/7' },
  ];

  /**
   * Obtiene la imagen principal seleccionada
   */
  get selectedImage(): Image | undefined {
    return this.images.find(img => img.id === this.selectedImageId);
  }

  /**
   * Selecciona una imagen como principal
   */
  selectImage(imageId: number) {
    this.selectedImageId = imageId;
  }
}
