# Angular Ejercicios - Alternancia

Aplicación web moderna desarrollada con **Angular 17** que demuestra componentes interactivos, validación de formularios, galerías dinámicas, sistema de gestión de contenido (CMS) y cambio de tema oscuro/claro.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejercicios Implementados](#ejercicios-implementados)
- [Despliegue](#despliegue)
- [Documentación Técnica](#documentación-técnica)

## ✨ Características

- ✅ **Navegación SPA**: Sistema de routing sin recargas de página
- ✅ **Formularios Reactivos**: Validación en tiempo real con indicadores visuales
- ✅ **Galería Interactiva**: Selección dinámica de imágenes con binding
- ✅ **Blog Dinámico**: CRUD completo para gestión de posts
- ✅ **Tema Oscuro/Claro**: Sistema de temas con CSS variables y persistencia
- ✅ **Diseño Responsive**: Adaptable a todos los tamaños de pantalla
- ✅ **Control de Versiones**: Historial completo en Git

## 📦 Requisitos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior
- **Angular CLI**: v17.0.0 o superior (opcional, pero recomendado)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/angular-ejercicios.git
cd angular-ejercicios
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación en desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### 4. Compilar para producción

```bash
npm run build:prod
```

Los archivos compilados estarán en la carpeta `dist/angular-ejercicios`

## 📁 Estructura del Proyecto

```
angular-ejercicios/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/              # Página de inicio
│   │   │   ├── contact/           # Formulario de contacto
│   │   │   ├── services/
│   │   │   │   ├── gallery/       # Galería de imágenes
│   │   │   │   └── blog/          # Sistema de blog
│   │   │   └── navigation/        # Barra de navegación y tema
│   │   ├── services/              # Servicios Angular
│   │   ├── app.component.ts       # Componente raíz
│   │   └── app.routes.ts          # Configuración de rutas
│   ├── assets/                    # Recursos estáticos
│   ├── styles.scss                # Estilos globales
│   └── main.ts                    # Punto de entrada
├── angular.json                   # Configuración de Angular
├── tsconfig.json                  # Configuración de TypeScript
└── package.json                   # Dependencias del proyecto
```

## 🎯 Ejercicios Implementados

### Ejercicio 1: Navegación con Angular Router
**Ubicación**: `src/app/app.routes.ts`, `src/app/components/navigation/`

**Características**:
- Tres secciones: Inicio, Servicios y Contacto
- Navegación SPA sin recargas de página
- Indicador de sección activa en la barra de navegación
- Uso de `RouterModule` y `routerLink`

**Requisitos cubiertos**:
- ✅ Usar RouterModule
- ✅ Navegación sin recargar página
- ✅ Sección activa visible según ruta

### Ejercicio 2: Formulario con Validación
**Ubicación**: `src/app/components/contact/`

**Características**:
- Formulario reactivo con `FormGroup` y `FormControl`
- Validaciones: campos obligatorios, email válido, longitud mínima
- Gestión de eventos: `valueChanges`, `blur`, `submit`
- Mostrar errores en tiempo real
- Indicadores visuales de validez (✓/✗)

**Validaciones aplicadas**:
- Nombre: obligatorio, mínimo 3 caracteres
- Email: obligatorio, formato válido
- Mensaje: obligatorio, mínimo 10 caracteres

### Ejercicio 3: Galería de Imágenes Interactiva
**Ubicación**: `src/app/components/services/gallery/`

**Características**:
- Miniaturas de imágenes con selección interactiva
- Actualización dinámica de imagen principal
- Imagen seleccionada visualmente resaltada
- Uso de directivas: `[src]`, `[alt]`, `[ngClass]`, `*ngIf`
- Binding de propiedades dinámico

### Ejercicio 4: Sistema de Posts Dinámicos (Blog)
**Ubicación**: `src/app/components/services/blog/`

**Características**:
- Formulario para crear nuevos posts
- Lista dinámica de posts con dos-way binding
- Botones para editar, eliminar y destacar posts
- Componentes independientes para cada post
- Visualización ordenada y dinámica

**Funcionalidades CRUD**:
- ✅ Crear: Nuevo post con título y descripción
- ✅ Leer: Visualizar lista de posts
- ✅ Actualizar: Editar título y descripción
- ✅ Eliminar: Remover posts de la lista
- ✅ Destacar: Marcar posts como favoritos

### Ejercicio 5: Variables CSS + Tema Oscuro/Claro
**Ubicación**: `src/app/components/navigation/`, `src/styles.scss`

**Características**:
- Variables CSS para colores principales
- Sistema de tema claro y oscuro
- Botón de alternancia en la barra de navegación
- Persistencia de preferencia en `localStorage`
- Cambio de estilos sin recargar página
- Uso de `ngClass` y binding dinámico

**Variables CSS definidas**:
- `--bg-primary`, `--bg-secondary`: Colores de fondo
- `--text-primary`, `--text-secondary`: Colores de texto
- `--border-color`: Color de bordes
- `--accent-color`, `--accent-hover`: Colores de acento
- `--error-color`, `--success-color`: Colores de estado

## 🌐 Despliegue

### Vercel (Despliegue Automático)

1. **Crear cuenta en Vercel**: https://vercel.com
2. **Conectar repositorio GitHub**:
   - Ir a https://vercel.com/new
   - Seleccionar tu repositorio
   - Vercel detectará automáticamente que es un proyecto Angular
3. **Configurar build settings**:
   - Build command: `npm run build:prod`
   - Output directory: `dist/angular-ejercicios`
4. **Deploy automático**: Cada push a `main` se despliega automáticamente

**URL de ejemplo**: `https://angular-ejercicios.vercel.app`

### InfinityFree (Despliegue Manual FTP)

1. **Crear cuenta en InfinityFree**: https://www.infinityfree.net/
2. **Compilar para producción**:
   ```bash
   npm run build:prod
   ```
3. **Conectar con FTP**:
   - Descargar FileZilla u otro cliente FTP
   - Credenciales: obtenerlas del panel de InfinityFree
   - Host: `ftpupload.net`
4. **Subir archivos**:
   - Copiar contenido de `dist/angular-ejercicios` a `public_html`
   - Incluir archivo `.htaccess` para reescritura de URLs de Angular

**Contenido de `.htaccess`**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html?/$1 [L]
</IfModule>
```

## 📚 Documentación Técnica

### Arquitectura de Componentes

#### AppComponent (Raíz)
- Importa: `NavigationComponent`
- Router outlet para carga dinámica de rutas

#### NavigationComponent
- Maneja: navegación, tema oscuro/claro
- Emite: cambios de tema

#### HomeComponent
- Página de bienvenida
- Información del proyecto

#### ServicesComponent
- Contenedor de galería y blog
- Layout responsivo

#### ContactComponent
- Formulario reactivo validado
- Manejo de errores en tiempo real

#### GalleryComponent
- Galería interactiva de imágenes
- Control de selección dinámica

#### BlogComponent
- CRUD de posts
- Formulario inline para edición

### Pattern: Componentes Standalone

Todos los componentes utilizan el patrón `standalone: true` (Angular 14+), lo que permite:
- Componentes independientes sin módulos
- Mejor tree-shaking
- Reducción de bundle size

**Ejemplo**:
```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
```

### Validación de Formularios Reactivos

```typescript
ngOnInit() {
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
}
```

### Sistema de Temas con CSS Variables

```scss
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

body.dark-theme {
  --bg-primary: #1e1e1e;
  --text-primary: #ffffff;
}
```

## 📝 Control de Versiones

### Estructura de Ramas

- **main**: Rama principal con código en producción
- **develop**: Rama de desarrollo
- **feature/ejercicio-X**: Ramas para cada ejercicio

### Commits Organizados

Ejemplo de historial de commits:

```
feat(ejercicio1): Implement Angular Router navigation
feat(ejercicio2): Add contact form with validation
feat(ejercicio3): Create interactive image gallery
feat(ejercicio4): Implement blog CRUD system
feat(ejercicio5): Add dark/light theme switching
docs: Update README with deployment instructions
```

## 🧪 Testing (Opcional)

Para agregar tests:

```bash
# Ejecutar tests
npm test

# Cobertura de tests
ng test --code-coverage
```

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia la aplicación en desarrollo |
| `npm run build:prod` | Compila para producción |
| `npm test` | Ejecuta tests unitarios |
| `npm run lint` | Verifica style guide |

## 📖 Recursos y Referencias

- [Documentación Angular Oficial](https://angular.io/docs)
- [Angular Router](https://angular.io/guide/router)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [Angular Styling Guide](https://angular.io/guide/styling)

## 👨‍💻 Autor

Desarrollado en el contexto de formación en **Alternancia** para aprender las mejores prácticas en desarrollo web con Angular.

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**Última actualización**: Abril 2026

¿Preguntas o sugerencias? Abre un issue en el repositorio o contacta a través del formulario en la aplicación.
