import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente Blog - Sistema de Posts Dinámicos
 * Ejercicio 4: Sistema de posts dinámicos
 * 
 * Funcionalidades:
 * - Crear nuevos posts con formulario
 * - Mostrar lista de posts dinámicamente
 * - Editar posts
 * - Eliminar posts
 * - Destacar posts como favoritos
 */
interface Post {
  id: number;
  title: string;
  description: string;
  date: Date;
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Bienvenida a Angular',
      description: 'Introducción a Angular y sus características principales.',
      date: new Date('2026-01-15'),
      featured: true
    },
    {
      id: 2,
      title: 'Componentes en Angular',
      description: 'Cómo crear y utilizar componentes en Angular de forma efectiva.',
      date: new Date('2026-01-20'),
      featured: false
    }
  ];

  newPost = { title: '', description: '' };
  nextId = 3;
  editingId: number | null = null;
  editingTitle = '';
  editingDescription = '';

  /**
   * Añade un nuevo post a la lista
   */
  addPost() {
    if (this.newPost.title.trim() && this.newPost.description.trim()) {
      this.posts.unshift({
        id: this.nextId++,
        title: this.newPost.title,
        description: this.newPost.description,
        date: new Date(),
        featured: false
      });
      this.newPost = { title: '', description: '' };
    }
  }

  /**
   * Inicia la edición de un post
   */
  startEdit(post: Post) {
    this.editingId = post.id;
    this.editingTitle = post.title;
    this.editingDescription = post.description;
  }

  /**
   * Guarda los cambios del post editado
   */
  saveEdit() {
    if (this.editingId !== null) {
      const post = this.posts.find(p => p.id === this.editingId);
      if (post && this.editingTitle.trim() && this.editingDescription.trim()) {
        post.title = this.editingTitle;
        post.description = this.editingDescription;
        this.cancelEdit();
      }
    }
  }

  /**
   * Cancela la edición
   */
  cancelEdit() {
    this.editingId = null;
    this.editingTitle = '';
    this.editingDescription = '';
  }

  /**
   * Elimina un post de la lista
   */
  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  /**
   * Alterna el estado destacado de un post
   */
  toggleFeatured(post: Post) {
    post.featured = !post.featured;
  }

  /**
   * Formatea la fecha para mostrar
   */
  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}
