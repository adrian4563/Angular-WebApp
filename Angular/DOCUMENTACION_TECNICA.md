# Documentación del Proyecto Angular - Ejercicios Alternancia

## Índice
1. [Introducción](#introducción)
2. [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
3. [Instalación Local](#instalación-local)
4. [Estructura de Componentes](#estructura-de-componentes)
5. [Sistema de Routing](#sistema-de-routing)
6. [Guía de Despliegue](#guía-de-despliegue)
7. [Documentación de Código](#documentación-de-código)

---

## Introducción

Esta aplicación Angular demuestra las mejores prácticas modernas en desarrollo web frontend, incluyendo:

- **Componentes Standalone**: Arquitectura modular sin necesidad de módulos
- **Routing SPA**: Navegación sin recargas de página
- **Formularios Reactivos**: Validación avanzada y manejo de errores
- **Gestión de Estado Local**: Comunicación entre componentes
- **Temas Dinámicos**: Sistema de cambio de tema con CSS variables
- **Diseño Responsive**: Compatible con todos los dispositivos

---

## Arquitectura de la Aplicación

### Estructura de Carpetas

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/          # Barra de navegación
│   │   ├── home/                # Página de inicio
│   │   ├── contact/             # Formulario de contacto
│   │   └── services/
│   │       ├── gallery/         # Galería de imágenes
│   │       └── blog/            # Sistema de blog
│   ├── services/                # Servicios Angular (para APIs)
│   ├── app.component.*          # Componente raíz
│   └── app.routes.ts            # Configuración de rutas
├── assets/                      # Recursos estáticos
├── styles.scss                  # Estilos globales
└── main.ts                      # Punto de entrada
```

### Flujo de la Aplicación

```
main.ts
  ↓
bootstrapApplication(AppComponent)
  ↓
AppComponent (que contiene NavigationComponent + router-outlet)
  ↓
Por ruta activa se carga:
  - HomeComponent
  - ServicesComponent (contiene GalleryComponent + BlogComponent)
  - ContactComponent
```

---

## Instalación Local

### Paso 1: Requisitos Previos

Verificar que tienes instalado:

```bash
# Verificar Node.js
node --version
# Debe ser v18.0.0 o superior

# Verificar npm
npm --version
# Debe ser v9.0.0 o superior
```

Si necesitas instalarlos, descargalos de: https://nodejs.org/

### Paso 2: Clonar el Repositorio

```bash
# Desde terminal
git clone https://github.com/tu-usuario/angular-ejercicios.git
cd angular-ejercicios
```

### Paso 3: Instalar Dependencias

```bash
npm install
```

Este comando descarga todas las librerías necesarias en la carpeta `node_modules`.

### Paso 4: Ejecutar en Desarrollo

```bash
npm start
```

**Resultado esperado**:
- Terminal muestra: `Application bundle generation complete`
- Navegador se abre automáticamente en: `http://localhost:4200`
- La página muestra la sección "Inicio" correctamente

### Paso 5: Detener la Aplicación

Presiona: **Ctrl + C** en la terminal

---

## Estructura de Componentes

### 1. AppComponent (app.component.ts)

**Responsabilidad**: Componente raíz de la aplicación

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

**Template**:
```html
<app-navigation></app-navigation>
<main class="main-content">
  <router-outlet></router-outlet>
</main>
```

**Propósito**: 
- Contiene la navegación
- Renderiza el componente actual según la ruta

---

### 2. NavigationComponent (components/navigation/)

**Responsabilidad**: Navegación y cambio de tema (Ejercicio 1 + Ejercicio 5)

**Funcionalidades**:
- Enlaces a todas las rutas
- Indicador de ruta activa
- Botón de cambio de tema oscuro/claro
- Persistencia de preferencia en localStorage

**Código clave**:
```typescript
toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  this.applyTheme();
  localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
}

private applyTheme() {
  const body = document.body;
  if (this.isDarkTheme) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
}
```

---

### 3. HomeComponent (components/home/)

**Responsabilidad**: Página de bienvenida (Ejercicio 1)

**Contenido**:
- Sección hero con título
- Grid de características
- Información del proyecto

**Variables definidas**:
```typescript
projectDescription = 'Una aplicación web moderna desarrollada con Angular...'
```

---

### 4. ContactComponent (components/contact/)

**Responsabilidad**: Formulario con validación (Ejercicio 2)

**Validaciones implementadas**:

| Campo | Validaciones |
|-------|-------------|
| Nombre | Obligatorio, mínimo 3 caracteres |
| Email | Obligatorio, formato válido |
| Mensaje | Obligatorio, mínimo 10 caracteres |

**Código de validación**:
```typescript
this.contactForm = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  message: ['', [Validators.required, Validators.minLength(10)]]
});
```

**Features de formulario**:
- ✓ Validación en tiempo real
- ✓ Mensajes de error descrictivos
- ✓ Indicadores visuales (rojo = error, verde = válido)
- ✓ Manejo de evento submit
- ✓ Limpieza de formulario después de envío

---

### 5. ServicesComponent (components/services/)

**Responsabilidad**: Contenedor de galería y blog

**Template**:
```html
<div class="services-content">
  <div class="section">
    <app-gallery></app-gallery>
  </div>
  <div class="section">
    <app-blog></app-blog>
  </div>
</div>
```

---

### 6. GalleryComponent (components/services/gallery/)

**Responsabilidad**: Galería de imágenes interactiva (Ejercicio 3)

**Features**:
- Imagen principal grande
- Miniaturas seleccionables
- Imagen seleccionada resaltada con borde azul
- Binding dinámico de propiedades

**Código clave**:
```typescript
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent {
  selectedImageId = 1;
  images: Image[] = [/* array de imágenes */];
  
  get selectedImage(): Image | undefined {
    return this.images.find(img => img.id === this.selectedImageId);
  }
  
  selectImage(imageId: number) {
    this.selectedImageId = imageId;
  }
}
```

**Template directives usadas**:
- `[src]` - Binding de atributo
- `[alt]` - Binding de atributo
- `[ngClass]` - Clases dinámicas
- `*ngFor` - Repetición con directiva estructural
- `*ngIf` - Renderizado condicional

---

### 7. BlogComponent (components/services/blog/)

**Responsabilidad**: Sistema CRUD de posts (Ejercicio 4)

**Operaciones CRUD**:

**Create** - Crear post:
```typescript
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
```

**Read** - Mostrar posts:
```html
<div *ngFor="let post of posts" class="post-card">
  <h4>{{ post.title }}</h4>
  <p>{{ post.description }}</p>
</div>
```

**Update** - Editar post:
```typescript
saveEdit() {
  if (this.editingId !== null) {
    const post = this.posts.find(p => p.id === this.editingId);
    if (post) {
      post.title = this.editingTitle;
      post.description = this.editingDescription;
    }
  }
}
```

**Delete** - Eliminar post:
```typescript
deletePost(id: number) {
  this.posts = this.posts.filter(post => post.id !== id);
}
```

**Features adicionales**:
- Marcar posts como destacados
- Edición inline
- Formato de fecha: formato español (ej: "15 de enero de 2026")

---

## Sistema de Routing

### Configuración de Rutas

Archivo: `src/app/app.routes.ts`

```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'inicio' }
];
```

### Explicación:

| Ruta | Componente | Descripción |
|------|-----------|------------|
| `/` | (redirige a) | Redirige a inicio |
| `/inicio` | HomeComponent | Página de bienvenida |
| `/servicios` | ServicesComponent | Galería y blog |
| `/contacto` | ContactComponent | Formulario |
| `**` | (redirige a) | Cualquier ruta no válida |

### Activación de Rutas en Template

```html
<a routerLink="/inicio" routerLinkActive="active">Inicio</a>
<a routerLink="/servicios" routerLinkActive="active">Servicios</a>
<a routerLink="/contacto" routerLinkActive="active">Contacto</a>
```

**Directives explicadas**:
- `routerLink="/inicio"` - Define la ruta destino
- `routerLinkActive="active"` - Añade clase cuando la ruta es activa
- `[routerLinkActiveOptions]="{ exact: true }"` - Solo activa con coincidencia exacta

---

## Sistema de Temas

### Variables CSS Globales

Archivo: `src/styles.scss`

```scss
:root {
  /* Tema claro */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent-color: #007bff;
  --error-color: #dc3545;
  --success-color: #28a745;
}

body.dark-theme {
  /* Tema oscuro */
  --bg-primary: #1e1e1e;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --accent-color: #4a9eff;
}
```

### Uso en Estilos

```scss
.elemento {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}
```

### Cambio Dinámico

```typescript
// En NavigationComponent
toggleTheme() {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
}
```

---

## Guía de Despliegue

### 1. Compilar para Producción

```bash
npm run build:prod
```

**Resultado**:
- Carpeta `dist/angular-ejercicios/` se crea/actualiza
- Archivos optimizados y minificados
- Tamaño reduce considerablemente

### 2. Despliegue en Vercel

#### Opción A: Interfaz Web

1. Ve a https://vercel.com/new
2. Conecta tu repositorio GitHub
3. Vercel detecta que es Angular
4. Configura:
   - **Build Command**: `npm run build:prod`
   - **Output Directory**: `dist/angular-ejercicios`
5. Haz clic en "Deploy"
6. Espera a que se despliegue (2-3 minutos)
7. Tu sitio está en vivo: `https://tu-proyecto.vercel.app`

#### Opción B: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Selecciona las opciones por defecto
# Tu URL se mostrará al final
```

### 3. Despliegue en InfinityFree

#### Paso 1: Crear Cuenta

1. Ve a https://www.infinityfree.net/
2. Registrate con email y contraseña
3. Crea un sitio web

#### Paso 2: Obtener Credenciales FTP

1. Panel de control → Tu dominio
2. Copia las credenciales:
   - **Host**: ftpupload.net
   - **Usuario**: tu_usuario
   - **Contraseña**: tu_contraseña

#### Paso 3: Compilar Aplicación

```bash
npm run build:prod
```

#### Paso 4: Conectar con FTP

**Opción A: Usando FileZilla**

1. Descarga FileZilla: https://filezilla-project.org/
2. Abre FileZilla
3. Ve a: Archivo → Administrador de Sitios
4. Nuevo sitio:
   - Host: `ftpupload.net`
   - Usuario: (pegardel panel)
   - Contraseña: (pega)
   - Puerto: 21
   - Protocolo: FTP
5. Conectar

**Opción B: WinSCP (Alternativa fácil)**

1. Descarga WinSCP: https://winscp.net/
2. Nueva sesión:
   - Host: `ftpupload.net`
   - Usuario/Contraseña: del panel
3. Conectar

#### Paso 5: Subir Archivos

```
1. En FTP, accede a carpeta: public_html
2. Desde explorador local, abre: dist/angular-ejercicios/
3. Copia TODOS los archivos a public_html
   - index.html
   - main.js
   - styles.css
   - polyfills.js
   - favicon.ico
   - assets/
4. Copia también el archivo .htaccess a public_html
```

#### Paso 6: Configurar .htaccess

El archivo `.htaccess` ya está en el proyecto. Cópialo a `public_html/`.

**Contenido importante**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [QSA,L]
</IfModule>
```

**¿Por qué es necesario?**
- Angular es una SPA (Single Page Application)
- Sin .htaccess, las rutas no funcionan
- Redirige todas las rutas a index.html

#### Paso 7: Verificar Despliegue

1. Accede a tu dominio en InfinityFree
2. Comprueba que todas las secciones funcionan:
   - ✓ Navegación sin recargas
   - ✓ Cambio de tema
   - ✓ Formulario valida
   - ✓ Galería interactiva
   - ✓ Blog funciona

---

## Documentación de Código

### Estructura de Componentes

Cada componente tiene la estructura:

```
componente/
├── componente.component.ts       # Lógica
├── componente.component.html     # Template
└── componente.component.scss     # Estilos
```

### Comentarios en Código

**Componentes**:
```typescript
/**
 * Componente Gallery - Galería de Imágenes Interactiva
 * Ejercicio 3: Galería interactiva
 * 
 * Funcionalidades:
 * - Mostrar miniaturas de imágenes
 * - Actualizar imagen principal dinámicamente
 * - Resaltar imagen seleccionada
 */
@Component({...})
export class GalleryComponent {
```

**Métodos**:
```typescript
/**
 * Selecciona una imagen como principal
 * @param imageId ID de la imagen a seleccionar
 */
selectImage(imageId: number) {
  this.selectedImageId = imageId;
}
```

**Interfaces**:
```typescript
/**
 * Interfaz para estructura de imagen
 */
interface Image {
  id: number;
  src: string;
  alt: string;
  title: string;
}
```

### Patrones Utilizados

#### 1. Componentes Standalone
```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
```

#### 2. Binding de Propiedades
```html
<!-- Property Binding -->
<img [src]="selectedImage.src">

<!-- Class Binding -->
<div [ngClass]="{ selected: isSelected }">

<!-- Event Binding -->
<button (click)="selectImage(image.id)">

<!-- Two-way Binding -->
<input [(ngModel)]="newPost.title">
```

#### 3. Directivas Estructurales
```html
<!-- *ngIf: Renderizado condicional -->
<div *ngIf="selectedImage">{{ selectedImage.title }}</div>

<!-- *ngFor: Repetición -->
<div *ngFor="let item of items">{{ item.name }}</div>
```

#### 4. Validación Reactiva de Formularios
```typescript
this.form = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]]
});

// Acceder al control
this.form.get('name')?.hasError('required')
```

---

## Troubleshooting

### Problema: "Cannot find module '@angular/core'"
**Solución**:
```bash
npm install
```

### Problema: "Port 4200 already in use"
**Solución**:
```bash
# Usar puerto diferente
ng serve --port 4201
```

### Problema: "Routes no funcionan en InfinityFree"
**Solución**:
- Verifica que `.htaccess` esté en `public_html`
- Comprueba que `mod_rewrite` está activado en hosting
- Contacta a soporte de InfinityFree

### Problema: "Tema oscuro no persiste después de recargar"
**Solución**:
- Verifica localStorage en DevTools (F12 → Application → localStorage)
- Comprueba que localStorage no está desactivado
- Abre la consola (F12 → Console) para errores

---

## Control de Versiones

### Commits Recomendados

```bash
# Después de Ejercicio 1
git add .
git commit -m "feat(ejercicio1): Implement Angular Router navigation"
git push origin feature/ejercicio1

# Después de Ejercicio 2
git commit -m "feat(ejercicio2): Add contact form with validation"

# ... etc para cada ejercicio

# Finalmente
git pull origin main
git merge feature/ejercicio5 main
git push origin main
```

---

## Recursos Adicionales

- [Angular Documentation](https://angular.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Vercel Docs](https://vercel.com/docs)

---

**Documento actualizado**: Abril 2026

¿Preguntas? Abre un issue en GitHub o contacta a través del formulario de la aplicación.
